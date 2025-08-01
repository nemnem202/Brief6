import Controller from "../libs/Controller";
import { Recipe, recipes, Category, categories, RecipeComment, recipeComments } from "../database/db";

export class RecipesController extends Controller {
  public readCategory() {
    const selectedCategoryId: string = this.request.params.categoryId;
    const selectedCategory: Category | undefined = categories.find((category) => {
      return category.id === parseInt(selectedCategoryId);
    });
    if (selectedCategory === undefined) {
      this.response.status(404).send("Catégorie non trouvée")
      return;
    }
    const recipeRegex: RegExp = new RegExp(`^${selectedCategoryId}`);
    const categoryRecipes: Recipe[] = recipes.filter((recipe) => {
      return recipeRegex.test(recipe.id.toString());
    })
    const recipeAverageNotes: number[] = categoryRecipes.map((recipe) => {
      const comments: RecipeComment[] = recipeComments.filter((comment) => comment.recipeId === recipe.id && typeof comment.note === "number");
      if (comments.length === 0) return 0;
      const total = comments.reduce((sum, comment) => sum + (comment.note ?? 0), 0);
      return Math.round((total / comments.length) * 10) / 10;
    });
    this.response.render("pages/category", { category: selectedCategory, recipes: categoryRecipes, averageNotes: recipeAverageNotes });
  }

  public readId() {
    const requestedRecipeID = this.request.params.id;
    const recipe = recipes.find((recipe) => {
      return recipe.id === parseInt(requestedRecipeID);
    });
    console.log(recipe);
    this.response.render("pages/recipe", { recipe });
  }


  public readName() {
    const requestedRecipeName = this.request.params.recipeName;
    const recipeList = recipes.filter((recipe) => {
      return recipe;
    });
    this.response.render("pages/category", { recipeList });
  }
}