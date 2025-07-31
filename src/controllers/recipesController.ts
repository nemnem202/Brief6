import Controller from "../libs/Controller";
import { Recipe, recipes } from "../database/db";

export class RecipesController extends Controller {
  public readCategory() {
    const categoryId: string = this.request.params.categoryId;
    const recipeRegex: RegExp = new RegExp(`^${categoryId}`);
    const categoryRecipes: Recipe[] = recipes.filter((recipe) => {
      return recipeRegex.test(recipe.id.toString());
    })
    console.log(categoryRecipes);
    this.response.render("pages/category", { categoryRecipes });
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