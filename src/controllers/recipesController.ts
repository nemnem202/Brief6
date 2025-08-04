import Controller from "../libs/Controller";
import {
  Recipe, recipes, Category, categories, Ingredient, ingredients,
  RecipeIngredient, recipeIngredients, RecipeInstruction, recipeInstructions,
  RecipeComment, recipeComments
} from "../database/db";

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
    const requestedRecipeID: string = this.request.params.id;

    const requestedRecipe: Recipe | undefined = recipes.find((recipe) => {
      return recipe.id === parseInt(requestedRecipeID);
    });
    if (requestedRecipe === undefined) {
      this.response.status(404).send("Recette non trouvée")
      return;
    }

    const requestedRecipeIngredientDetails: RecipeIngredient[] = recipeIngredients.filter((ingredient) => {
      return ingredient.recipeId == parseInt(requestedRecipeID);
    })

    const requestedRecipeIngredientList: Ingredient[] = [];
    requestedRecipeIngredientDetails.forEach(detail => {
      const currentIngredient = ingredients.find(currentIngredient => currentIngredient.id === detail.ingredientId);
      if (currentIngredient) {
        requestedRecipeIngredientList.push(currentIngredient);
      }
    });

    const requestedRecipeInsdtructions: RecipeInstruction[] = recipeInstructions.filter((instruction) => {
      return instruction.recipeId === parseInt(requestedRecipeID);
    })

    const requestedRecipeComments: RecipeComment[] = recipeComments.filter((comment) => {
      return comment.recipeId == parseInt(requestedRecipeID);
    })

    this.response.render("pages/recipe", {
      recipe: requestedRecipe,
      ingredients: requestedRecipeIngredientList,
      ingredientDetails: requestedRecipeIngredientDetails,
      instructions: requestedRecipeInsdtructions,
      comments: requestedRecipeComments
    });
  }


  public readName() {
    const requestedRecipeName = this.request.params.recipeName;
    const recipeList = recipes.filter((recipe) => {
      return recipe;
    });
    this.response.render("pages/category", { recipeList });
  }
}