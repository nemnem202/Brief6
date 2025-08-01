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
  console.log(`Page de la recette id ${request.params.id} requested by a user`);
  new RecipesController(request, response).readId();
});

router.get("/recipes/byName/:recipeName", (request, response) => {
  console.log(`Page de la recette ${request.params.recipeName} requested by a user`);
  new RecipesController(request, response).readName();
});

export default router;
