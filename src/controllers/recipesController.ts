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
import { timeStamp } from "node:console";

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
    const comment: RecipeComment = {
      id: recipeComments.length + 1,
      username: this.request.body.user,
      content: this.request.body.message,
      note: this.request.body.note,
      createdAt: new Date(),
      recipeId: this.request.body.id,
    }
    recipeComments.push(comment);
    this.response.status(200).json(comment);
  }

  public browseRecipeByName() {
    const input = this.request.params.recipeName;

    const splittedInput = decodeURIComponent(input).split(" ");

    const validRecipes = recipes
      .filter((r) =>
        splittedInput.some((i) => r.title.toLowerCase().includes(i.toLowerCase()) && i.length > 3)
      )
      .sort((a, b) => {
        // score maximum de lettres communes entre titre et n'importe quel mot saisi
        const scoreA = Math.max(...splittedInput.map((i) => this.commonLettersCount(a.title, i)));
        const scoreB = Math.max(...splittedInput.map((i) => this.commonLettersCount(b.title, i)));
        return scoreB - scoreA; // tri décroissant
      });

    this.response.send(validRecipes);
  }

  private commonLettersCount(str1: string, str2: string): number {
    const a = str1.toLowerCase();
    const b = str2.toLowerCase();
    let count = 0;
    for (const char of a) {
      if (b.includes(char)) {
        count++;
      }
    }
    return count;
  }
}
