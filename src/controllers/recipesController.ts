import Controller from "../libs/Controller";
import { Recipe, recipes, Category, categories } from "../database/db";

export class RecipesController extends Controller {
  public readCategory() {
    const selectedCategoryId: string = this.request.params.categoryId;
    const category: Category | undefined = categories.find((category) => {
      return category.id === parseInt(selectedCategoryId);
    });
    if (category === undefined) {
      this.response.status(404).send("Catégorie non trouvée")
      return;
    }
    const recipeRegex: RegExp = new RegExp(`^${selectedCategoryId}`);
    const categoryRecipes: Recipe[] = recipes.filter((recipe) => {
      return recipeRegex.test(recipe.id.toString());
    })
    this.response.render("pages/category", { category: category.name, recipes: categoryRecipes });
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