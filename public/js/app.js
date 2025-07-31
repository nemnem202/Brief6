(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('express'), require('node:path')) :
    typeof define === 'function' && define.amd ? define(['express', 'node:path'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Express, global.path));
})(this, (function (Express, path) { 'use strict';

    class Controller {
        constructor(request, response) {
            this.request = request;
            this.response = response;
        }
        respond() {
            console.log("empty response sent");
            this.response.send("empty response");
        }
    }

    const categories = [
        {
            id: 1,
            name: "Entrées",
            description: "Des entrées délicieuses pour commencer le repas.",
        },
        {
            id: 2,
            name: "Plats principaux",
            description: "Des plats principaux savoureux pour le cœur du repas.",
        },
        {
            id: 3,
            name: "Desserts",
            description: "Des desserts sucrés pour terminer le repas sur une note agréable.",
        },
    ];
    const recipes = [
        // Entrées
        { id: 101, title: "Bruschetta", description: "Une entrée italienne classique." },
        { id: 102, title: "Salade Grecque", description: "Une salade fraîche et savoureuse." },
        { id: 103, title: "Gaspacho Andalou", description: "Soupe froide espagnole, parfaite pour l'été." },
        { id: 104, title: "Velouté de Potimarron", description: "Un velouté doux et réconfortant aux saveurs d'automne." },
        { id: 105, title: "Salade de Chèvre Chaud", description: "Salade gourmande avec du chèvre chaud sur toast." },
        { id: 106, title: "Tzatziki", description: "Spécialité grecque à base de concombre et de yaourt." },
        // Plats principaux
        { id: 201, title: "Pâtes Carbonara", description: "Un plat italien riche et crémeux." },
        { id: 202, title: "Poulet Rôti", description: "Un poulet rôti aux herbes de Provence." },
        { id: 203, title: "Lasagnes à la Bolognaise", description: "Le grand classique italien, généreux et familial." },
        { id: 204, title: "Hachis Parmentier", description: "Un plat traditionnel français avec purée de pommes de terre et viande hachée." },
        { id: 205, title: "Curry de Poulet au Lait de Coco", description: "Un plat exotique, doux et parfumé." },
        { id: 206, title: "Risotto aux Champignons", description: "Un risotto crémeux et savoureux aux champignons de Paris." },
        { id: 207, title: "Magret de Canard au Miel", description: "Une recette sucrée-salée élégante et rapide à préparer." },
        { id: 208, title: "Quiche Lorraine", description: "Une tarte salée traditionnelle de la cuisine lorraine." },
        // Desserts
        { id: 301, title: "Tiramisu", description: "Un dessert italien classique." },
        { id: 302, title: "Tarte aux Pommes", description: "Une tarte sucrée à la cannelle." },
        { id: 303, title: "Mousse au Chocolat", description: "Une mousse intense et aérienne pour les amateurs de chocolat." },
        { id: 304, title: "Crème Brûlée", description: "Dessert onctueux avec une fine couche de caramel croquant." },
        { id: 305, "title": "Gâteau au Yaourt", "description": "Le gâteau le plus simple et rapide à réaliser, parfait pour le goûter." },
        { id: 306, "title": "Panna Cotta aux Fruits Rouges", "description": "Un dessert italien frais, léger et crémeux." },
        { id: 307, "title": "Fondant au Chocolat", "description": "Un petit gâteau individuel au cœur coulant de chocolat." },
        { id: 308, "title": "Tarte au Citron Meringuée", "description": "L'équilibre parfait entre l'acidité du citron et la douceur de la meringue." },
    ];

    class RecipesController extends Controller {
        readCategory() {
            const selectedCategoryId = this.request.params.categoryId;
            const category = categories.find((category) => {
                return category.id === parseInt(selectedCategoryId);
            });
            if (category === undefined) {
                this.response.status(404).send("Catégorie non trouvée");
                return;
            }
            const recipeRegex = new RegExp(`^${selectedCategoryId}`);
            const categoryRecipes = recipes.filter((recipe) => {
                return recipeRegex.test(recipe.id.toString());
            });
            this.response.render("pages/category", { category: category.name, recipes: categoryRecipes });
        }
        readId() {
            const requestedRecipeID = this.request.params.id;
            const recipe = recipes.find((recipe) => {
                return recipe.id === parseInt(requestedRecipeID);
            });
            console.log(recipe);
            this.response.render("pages/recipe", { recipe });
        }
        readName() {
            this.request.params.recipeName;
            const recipeList = recipes.filter((recipe) => {
                return recipe;
            });
            this.response.render("pages/category", { recipeList });
        }
    }

    const router = Express.Router();
    router.get("/", (request, response) => {
        response.render("pages/home");
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

    const app = Express();
    const PORT = 3000;
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));
    app.use(Express.json());
    app.use(Express.static(path.join(__dirname, "../public")));
    app.use(router);
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });

}));
//# sourceMappingURL=app.js.map
