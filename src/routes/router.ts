import { Router } from "express";
import { RecipesController } from "../controllers/recipesController";

const router = Router();

router.get("/", (request, response) => {
  response.render("pages/category", { category: "Entrées" });
});

router.get("/:categoryId/recipes", (request, response) => {
  new RecipesController(request, response).readCategory();
});

router.get("/recipes/:id", (request, response) => {
  console.log(`Page de la recette ${request.params.id} requestuested by a user`);
  new RecipesController(request, response).readId();
});

router.get("/recipes/:recipeName", (request, response) => {
  new RecipesController(request, response).readName();
});

export default router;
