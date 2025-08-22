"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesController = void 0;
const Controller_1 = __importDefault(require("../libs/Controller"));
const db_1 = require("../database/db");
class RecipesController extends Controller_1.default {
    readCategory() {
        const id = parseInt(this.request.params.categoryId);
        const selectedCategory = db_1.categories.find((category) => category.id === id);
        if (selectedCategory === undefined) {
            this.response.status(404).render("errors/404", {
                title: "Catégorie introuvable",
                description: "La catégorie recherchée n'existe pas.",
            });
            return;
        }
        const categoryRecipes = db_1.recipes.filter((r) => String(r.id)[0] === String(id));
        const averageNotesArray = this.calculateAverageNoteForAll(categoryRecipes);
        this.response.render("pages/category", {
            category: selectedCategory,
            recipes: categoryRecipes,
            averageNotes: averageNotesArray,
        });
    }
    calculateAverageNoteForAll(categoryRecipes) {
        const averageNotesArray = categoryRecipes.map((recipe) => {
            const comments = db_1.recipeComments.filter((comment) => comment.note && comment.recipeId === recipe.id);
            if (comments.length === 0)
                return 0;
            const total = comments.reduce((sum, comment) => sum + (comment.note ?? 0), 0);
            return Math.round((total / comments.length) * 10) / 10;
        });
        return averageNotesArray;
    }
    readRecipe() {
        const id = parseInt(this.request.params.id);
        const requestedRecipe = db_1.recipes.find((recipe) => {
            return recipe.id === id;
        });
        if (requestedRecipe === undefined) {
            this.response.status(404).render("errors/404", {
                title: "Recette introuvable",
                description: "La recette recherchée n'existe pas.",
            });
            return;
        }
        const requestedRecipeIngredientDetails = db_1.recipeIngredients.filter((ingredient) => {
            return ingredient.recipeId == id;
        });
        const requestedRecipeIngredientList = requestedRecipeIngredientDetails
            .map((detail) => db_1.ingredients.find((currentIngredient) => currentIngredient.id === detail.ingredientId))
            .filter((ingredient) => !!ingredient);
        const requestedRecipeInsdtructions = db_1.recipeInstructions.filter((instruction) => instruction.recipeId === id);
        const requestedRecipeComments = db_1.recipeComments.filter((comment) => comment.recipeId == id);
        this.response.render("pages/recipe", {
            recipe: requestedRecipe,
            ingredients: requestedRecipeIngredientList,
            ingredientDetails: requestedRecipeIngredientDetails,
            instructions: requestedRecipeInsdtructions,
            comments: requestedRecipeComments,
        });
    }
    addComment() {
        const comment = {
            id: db_1.recipeComments.length + 1,
            username: this.request.body.user,
            content: this.request.body.message,
            note: this.request.body.note,
            createdAt: new Date(),
            recipeId: this.request.body.id,
        };
        db_1.recipeComments.push(comment);
        this.response.status(200).json(comment);
    }
    browseRecipeByName() {
        const input = this.request.params.recipeName;
        const splittedInput = decodeURIComponent(input).split(" ");
        const validRecipes = db_1.recipes
            .filter((r) => splittedInput.some((i) => r.title.toLowerCase().includes(i.toLowerCase()) && i.length > 3))
            .sort((a, b) => {
            // score maximum de lettres communes entre titre et n'importe quel mot saisi
            const scoreA = Math.max(...splittedInput.map((i) => this.commonLettersCount(a.title, i)));
            const scoreB = Math.max(...splittedInput.map((i) => this.commonLettersCount(b.title, i)));
            return scoreB - scoreA; // tri décroissant
        });
        this.response.send(validRecipes);
    }
    commonLettersCount(str1, str2) {
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
exports.RecipesController = RecipesController;
