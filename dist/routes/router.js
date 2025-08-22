"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipesController_1 = require("../controllers/recipesController");
const generalController_1 = require("../controllers/generalController");
const router = (0, express_1.Router)();
router.get("/", (request, response) => {
    new generalController_1.GeneralController(request, response).homePage();
});
router.get("/:categoryId/recipes", (request, response) => {
    new recipesController_1.RecipesController(request, response).readCategory();
});
router.get("/recipes/byId/:id", (request, response) => {
    console.log(`Page for recipe with id ${request.params.id} requested by a user`);
    new recipesController_1.RecipesController(request, response).readRecipe();
});
router.post("/recipes/byId/:id", (request, response) => {
    console.log(`Comment for recipe with id ${request.params.id} added by a user`);
    new recipesController_1.RecipesController(request, response).addComment();
});
router.get("/recipes/byName/:recipeName", (request, response) => {
    console.log(`Page de la recette ${request.params.recipeName} requested by a user`);
    new recipesController_1.RecipesController(request, response).browseRecipeByName();
});
exports.default = router;
