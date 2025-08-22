import { Router } from "express";
import { RecipesController } from "../controllers/recipesController";
import { GeneralController } from "../controllers/generalController";

const router = Router();

router.get("/", (request, response) => {
  new GeneralController(request, response).homePage();
});

router.get("/:categoryId/recipes", (request, response) => {
  new RecipesController(request, response).readCategory();
});

router.get("/recipes/byId/:id", (request, response) => {
  console.log(`Page for recipe with id ${request.params.id} requested by a user`);
  new RecipesController(request, response).readRecipe();
});

router.post("/recipes/byId/:id", (request, response) => {
  console.log(`Comment for recipe with id ${request.params.id} added by a user`);
  new RecipesController(request, response).addComment();
});

router.get("/recipes/byName/:recipeName", (request, response) => {
  console.log(`Page de la recette ${request.params.recipeName} requested by a user`);
  new RecipesController(request, response).browseRecipeByName();
});

export default router;
