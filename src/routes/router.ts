import { Router } from "express";
import CategoryController from "../controllers/categoryController";
import RecipeFromIdController from "../controllers/recipeFromNameController";
import RecipeFromNameController from "../controllers/recipeFromNameController";

const router = Router();

router.get("/", (request, response) => {
  const ip = request.ip;
  console.log("Page d'accueil requestuested from: " + ip);
  response.render('pages/home');
});

router.get("/:categoryId/recipes", (request, response) => {
  console.log(`Page recette de la catégorie ${request.params.categoryId} requestuested by a user`);
  new CategoryController(request, response, 'pages/category').respond();
});

router.get("/recipes/:id", (request, response) => {
  console.log(`Page de la recette ${request.params.id} requestuested by a user`);
  new RecipeFromIdController(request, response, 'pages/recipe', {id:request.params.id}).respond();
});

router.get("/recipes/:recipeName", (request, response) => {
  console.log(`Page de la recette ${request.params.recipeName} requestuested by a user`);
  new RecipeFromNameController(request, response, 'pages/recipe', {name:request.params.recipeName}).respond();
});

export default router;
