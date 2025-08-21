import Controller from "../libs/Controller";
import {
  recipes,
  categories,
  ingredients,
  recipeIngredients,
  recipeInstructions,
  recipeComments,
} from "../database/db";
import {
  Category,
  Ingredient,
  Recipe,
  RecipeComment,
  RecipeIngredient,
  RecipeInstruction,
} from "../database/types";

export class RecipesController extends Controller {
  public readCategory() {
    const id: number = parseInt(this.request.params.categoryId);

    const selectedCategory: Category | undefined = categories.find(
      (category) => category.id === id
    );

    if (selectedCategory === undefined) {
      this.response.status(404).render("errors/404", {
        title: "Catégorie introuvable",
        description: "La catégorie recherchée n'existe pas.",
      });
      return;
    }

    const categoryRecipes = recipes.filter((r) => String(r.id)[0] === String(id));

    const averageNotesArray = this.calculateAverageNoteForAll(categoryRecipes);

    this.response.render("pages/category", {
      category: selectedCategory,
      recipes: categoryRecipes,
      averageNotes: averageNotesArray,
    });
  }

  private calculateAverageNoteForAll(categoryRecipes: Recipe[]): number[] {
    const averageNotesArray: number[] = categoryRecipes.map((recipe) => {
      const comments: RecipeComment[] = recipeComments.filter(
        (comment) => comment.note && comment.recipeId === recipe.id
      );
      if (comments.length === 0) return 0;
      const total = comments.reduce((sum, comment) => sum + (comment.note ?? 0), 0);
      return Math.round((total / comments.length) * 10) / 10;
    });

    return averageNotesArray;
  }

  public readRecipe() {
    const id: number = parseInt(this.request.params.id);

    const requestedRecipe: Recipe | undefined = recipes.find((recipe) => {
      return recipe.id === id;
    });
    if (requestedRecipe === undefined) {
      this.response.status(404).render("errors/404", {
        title: "Recette introuvable",
        description: "La recette recherchée n'existe pas.",
      });
      return;
    }

    const requestedRecipeIngredientDetails: RecipeIngredient[] = recipeIngredients.filter(
      (ingredient) => {
        return ingredient.recipeId == id;
      }
    );

    const requestedRecipeIngredientList: Ingredient[] = requestedRecipeIngredientDetails
      .map((detail) =>
        ingredients.find((currentIngredient) => currentIngredient.id === detail.ingredientId)
      )
      .filter((ingredient) => !!ingredient);

    const requestedRecipeInsdtructions: RecipeInstruction[] = recipeInstructions.filter(
      (instruction) => instruction.recipeId === id
    );

    const requestedRecipeComments: RecipeComment[] = recipeComments.filter(
      (comment) => comment.recipeId == id
    );

    this.response.render("pages/recipe", {
      recipe: requestedRecipe,
      ingredients: requestedRecipeIngredientList,
      ingredientDetails: requestedRecipeIngredientDetails,
      instructions: requestedRecipeInsdtructions,
      comments: requestedRecipeComments,
    });
  }

  public addComment() {
    const commentedRecipeName = this.request.params.recipeName;
  }

  public browseRecipeByName() {
    const requestedRecipeName = this.request.params.recipeName;
    const recipeList = recipes.filter((recipe) => {
      return recipe;
    });
    this.response.render("pages/category", { recipeList });
  }
}
