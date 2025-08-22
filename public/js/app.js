import Express, { Router } from 'express';
import path from 'node:path';

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
const ingredients = [
    { id: 1, name: "Pain" },
    { id: 2, name: "Tomates" },
    { id: 3, name: "Basilic" },
    { id: 4, name: "Huile d'olive" },
    { id: 5, name: "Concombre" },
    { id: 6, name: "Oignons rouges" },
    { id: 7, name: "Feta" },
    { id: 8, name: "Olives" },
    { id: 9, name: "Pâtes" },
    { id: 10, name: "Œufs" },
    { id: 11, name: "Pancetta" },
    { id: 12, name: "Parmesan" },
    { id: 13, name: "Poivre" },
    { id: 14, name: "Poulet" },
    { id: 15, name: "Herbes de Provence" },
    { id: 16, name: "Ail" },
    { id: 17, name: "Beurre" },
    { id: 18, name: "Biscuits à la cuillère" },
    { id: 19, name: "Café" },
    { id: 20, name: "Mascarpone" },
    { id: 21, name: "Cacao" },
    { id: 22, name: "Pâte brisée" },
    { id: 23, name: "Pommes" },
    { id: 24, name: "Sucre" },
    { id: 25, name: "Cannelle" },
    { id: 26, name: "Potimarron" },
    { id: 27, name: "Bouillon" },
    { id: 28, name: "Fromage de chèvre" },
    { id: 29, name: "Salade verte" },
    { id: 30, name: "Vinaigrette" },
    { id: 31, name: "Yaourt" },
    { id: 32, name: "Sel" },
    { id: 33, name: "Viande hachée" },
    { id: 34, name: "Lait" },
    { id: 35, name: "Farine" },
    { id: 36, name: "Lait de coco" },
    { id: 37, name: "Curry en poudre" },
    { id: 38, name: "Riz" },
    { id: 39, name: "Champignons" },
    { id: 40, name: "Magret de canard" },
    { id: 41, name: "Vinaigre balsamique" },
    { id: 42, name: "Miel" },
    { id: 43, name: "Crème" },
    { id: 44, name: "Chocolat" },
    { id: 45, name: "Cassonade" },
    { id: 46, name: "Gousse de vanille" },
    { id: 47, name: "Levure chimique" },
    { id: 48, name: "Gélatine" },
    { id: 49, name: "Coulis de fruits rouges" },
    { id: 50, name: "Citron" },
];
const recipeIngredients = [
    // Bruschetta (101)
    { id: 1, quantity: 4, unit: "tranches", ingredientId: 1, recipeId: 101 },
    { id: 2, quantity: 2, unit: "grosses", ingredientId: 2, recipeId: 101 },
    { id: 3, quantity: 1, unit: "bouquet", ingredientId: 3, recipeId: 101 },
    { id: 4, quantity: 4, unit: "cuillères à soupe", ingredientId: 4, recipeId: 101 },
    { id: 5, quantity: 1, unit: "gousse", ingredientId: 16, recipeId: 101 },
    // Salade Grecque (102)
    { id: 6, quantity: 1, unit: "unité", ingredientId: 5, recipeId: 102 },
    { id: 7, quantity: 3, unit: "unités", ingredientId: 2, recipeId: 102 },
    { id: 8, quantity: 1, unit: "unité", ingredientId: 6, recipeId: 102 },
    { id: 9, quantity: 200, unit: "grammes", ingredientId: 7, recipeId: 102 },
    { id: 10, quantity: 100, unit: "grammes", ingredientId: 8, recipeId: 102 },
    { id: 11, quantity: 5, unit: "cuillères à soupe", ingredientId: 4, recipeId: 102 },
    // Gaspacho (103)
    { id: 12, quantity: 1, unit: "kg", ingredientId: 2, recipeId: 103 },
    { id: 13, quantity: 1, unit: "unité", ingredientId: 5, recipeId: 103 },
    { id: 14, quantity: 1, unit: "unité", ingredientId: 6, recipeId: 103 },
    { id: 15, quantity: 100, unit: "ml", ingredientId: 4, recipeId: 103 },
    // Velouté de Potimarron (104)
    { id: 16, quantity: 1, unit: "unité", ingredientId: 6, recipeId: 104 },
    { id: 17, quantity: 2, unit: "gousses", ingredientId: 16, recipeId: 104 },
    // Salade de Chèvre Chaud (105)
    { id: 18, quantity: 4, unit: "tranches", ingredientId: 1, recipeId: 105 },
    { id: 19, quantity: 4, unit: "cuillères à soupe", ingredientId: 4, recipeId: 105 },
    // Tzatziki (106)
    { id: 20, quantity: 1, unit: "unité", ingredientId: 5, recipeId: 106 },
    { id: 21, quantity: 1, unit: "gousse", ingredientId: 16, recipeId: 106 },
    { id: 22, quantity: 2, unit: "cuillères à soupe", ingredientId: 4, recipeId: 106 },
    // Pâtes Carbonara (201)
    { id: 23, quantity: 400, unit: "grammes", ingredientId: 9, recipeId: 201 },
    { id: 24, quantity: 4, unit: "jaunes", ingredientId: 10, recipeId: 201 },
    { id: 25, quantity: 150, unit: "grammes", ingredientId: 11, recipeId: 201 },
    { id: 26, quantity: 100, unit: "grammes", ingredientId: 12, recipeId: 201 },
    { id: 27, quantity: 1, unit: "pincée", ingredientId: 13, recipeId: 201 },
    // Poulet Rôti (202)
    { id: 28, quantity: 1, unit: "entier", ingredientId: 14, recipeId: 202 },
    { id: 29, quantity: 2, unit: "cuillères à soupe", ingredientId: 15, recipeId: 202 },
    { id: 30, quantity: 4, unit: "gousses", ingredientId: 16, recipeId: 202 },
    { id: 31, quantity: 50, unit: "grammes", ingredientId: 17, recipeId: 202 },
    // Lasagnes (203)
    { id: 32, quantity: 12, unit: "feuilles", ingredientId: 9, recipeId: 203 },
    { id: 33, quantity: 1, unit: "unité", ingredientId: 6, recipeId: 203 },
    { id: 34, quantity: 2, unit: "gousses", ingredientId: 16, recipeId: 203 },
    { id: 35, quantity: 400, unit: "grammes", ingredientId: 2, recipeId: 203 },
    { id: 36, quantity: 100, unit: "grammes", ingredientId: 12, recipeId: 203 },
    // Hachis Parmentier (204)
    { id: 37, quantity: 1, unit: "kg", ingredientId: 23, recipeId: 204 }, // Pommes de terre simulées
    { id: 38, quantity: 1, unit: "unité", ingredientId: 6, recipeId: 204 },
    { id: 39, quantity: 50, unit: "grammes", ingredientId: 17, recipeId: 204 },
    // Curry de Poulet (205)
    { id: 40, quantity: 4, unit: "blancs", ingredientId: 14, recipeId: 205 },
    { id: 41, quantity: 1, unit: "unité", ingredientId: 6, recipeId: 205 },
    { id: 42, quantity: 2, unit: "gousses", ingredientId: 16, recipeId: 205 },
    { id: 43, quantity: 2, unit: "cuillères à soupe", ingredientId: 4, recipeId: 205 },
    // Risotto aux Champignons (206)
    { id: 44, quantity: 1, unit: "unité", ingredientId: 6, recipeId: 206 },
    { id: 45, quantity: 2, unit: "gousses", ingredientId: 16, recipeId: 206 },
    { id: 46, quantity: 50, unit: "grammes", ingredientId: 12, recipeId: 206 },
    { id: 47, quantity: 30, unit: "grammes", ingredientId: 17, recipeId: 206 },
    // Magret de Canard (207)
    { id: 48, quantity: 2, unit: "cuillères à soupe", ingredientId: 4, recipeId: 207 },
    // Quiche Lorraine (208)
    { id: 49, quantity: 1, unit: "unité", ingredientId: 22, recipeId: 208 },
    { id: 50, quantity: 200, unit: "grammes", ingredientId: 11, recipeId: 208 },
    { id: 51, quantity: 3, unit: "unités", ingredientId: 10, recipeId: 208 },
    // Tiramisu (301)
    { id: 52, quantity: 250, unit: "grammes", ingredientId: 18, recipeId: 301 },
    { id: 53, quantity: 2, unit: "tasses", ingredientId: 19, recipeId: 301 },
    { id: 54, quantity: 500, unit: "grammes", ingredientId: 20, recipeId: 301 },
    { id: 55, quantity: 4, unit: "unités", ingredientId: 10, recipeId: 301 },
    { id: 56, quantity: 100, unit: "grammes", ingredientId: 24, recipeId: 301 },
    { id: 57, quantity: 3, unit: "cuillères à soupe", ingredientId: 21, recipeId: 301 },
    // Tarte aux Pommes (302)
    { id: 58, quantity: 1, unit: "unité", ingredientId: 22, recipeId: 302 },
    { id: 59, quantity: 4, unit: "unités", ingredientId: 23, recipeId: 302 },
    { id: 60, quantity: 80, unit: "grammes", ingredientId: 24, recipeId: 302 },
    { id: 61, quantity: 1, unit: "cuillère à café", ingredientId: 25, recipeId: 302 },
    { id: 62, quantity: 50, unit: "grammes", ingredientId: 17, recipeId: 302 },
    // Mousse au Chocolat (303)
    { id: 63, quantity: 4, unit: "unités", ingredientId: 10, recipeId: 303 },
    { id: 64, quantity: 50, unit: "grammes", ingredientId: 24, recipeId: 303 },
    // Crème Brûlée (304)
    { id: 65, quantity: 5, unit: "jaunes", ingredientId: 10, recipeId: 304 },
    { id: 66, quantity: 120, unit: "grammes", ingredientId: 24, recipeId: 304 },
    // Gâteau au Yaourt (305)
    { id: 67, quantity: 2, unit: "pots", ingredientId: 24, recipeId: 305 },
    { id: 68, quantity: 3, unit: "unités", ingredientId: 10, recipeId: 305 },
    { id: 69, quantity: 0.5, unit: "pot", ingredientId: 4, recipeId: 305 },
    // Panna Cotta (306)
    { id: 70, quantity: 50, unit: "grammes", ingredientId: 24, recipeId: 306 },
    // Fondant au Chocolat (307)
    { id: 71, quantity: 100, unit: "grammes", ingredientId: 17, recipeId: 307 },
    { id: 72, quantity: 100, unit: "grammes", ingredientId: 24, recipeId: 307 },
    { id: 73, quantity: 2, unit: "unités", ingredientId: 10, recipeId: 307 },
    // Tarte au Citron Meringuée (308)
    { id: 74, quantity: 1, unit: "unité", ingredientId: 22, recipeId: 308 },
    { id: 75, quantity: 4, unit: "unités", ingredientId: 10, recipeId: 308 },
    { id: 76, quantity: 150, unit: "grammes", ingredientId: 24, recipeId: 308 },
    { id: 77, quantity: 80, unit: "grammes", ingredientId: 17, recipeId: 308 },
    // Velouté de Potimarron (104)
    { id: 78, quantity: 1, unit: "unité", ingredientId: 26, recipeId: 104 },
    { id: 79, quantity: 1, unit: "litre", ingredientId: 27, recipeId: 104 },
    { id: 80, quantity: 2, unit: "cuillères à soupe", ingredientId: 4, recipeId: 104 },
    // Salade de Chèvre Chaud (105)
    { id: 81, quantity: 4, unit: "crottins", ingredientId: 28, recipeId: 105 },
    { id: 82, quantity: 200, unit: "grammes", ingredientId: 29, recipeId: 105 },
    { id: 83, quantity: 3, unit: "cuillères à soupe", ingredientId: 30, recipeId: 105 },
    // Tzatziki (106)
    { id: 84, quantity: 250, unit: "grammes", ingredientId: 31, recipeId: 106 },
    { id: 85, quantity: 1, unit: "pincée", ingredientId: 32, recipeId: 106 },
    // Lasagnes (203)
    { id: 86, quantity: 500, unit: "grammes", ingredientId: 33, recipeId: 203 },
    { id: 87, quantity: 500, unit: "ml", ingredientId: 34, recipeId: 203 },
    { id: 88, quantity: 50, unit: "grammes", ingredientId: 35, recipeId: 203 },
    { id: 89, quantity: 50, unit: "grammes", ingredientId: 17, recipeId: 203 },
    // Hachis Parmentier (204)
    { id: 90, quantity: 500, unit: "grammes", ingredientId: 33, recipeId: 204 },
    { id: 91, quantity: 200, unit: "ml", ingredientId: 34, recipeId: 204 },
    // Curry de Poulet (205)
    { id: 92, quantity: 400, unit: "ml", ingredientId: 36, recipeId: 205 },
    { id: 93, quantity: 2, unit: "cuillères à soupe", ingredientId: 37, recipeId: 205 },
    { id: 94, quantity: 300, unit: "grammes", ingredientId: 38, recipeId: 205 },
    // Risotto aux Champignons (206)
    { id: 95, quantity: 350, unit: "grammes", ingredientId: 38, recipeId: 206 },
    { id: 96, quantity: 250, unit: "grammes", ingredientId: 39, recipeId: 206 },
    { id: 97, quantity: 1, unit: "litre", ingredientId: 27, recipeId: 206 },
    // Magret de Canard (207)
    { id: 98, quantity: 2, unit: "unités", ingredientId: 40, recipeId: 207 },
    { id: 99, quantity: 2, unit: "cuillères à soupe", ingredientId: 41, recipeId: 207 },
    { id: 100, quantity: 1, unit: "cuillère à soupe", ingredientId: 42, recipeId: 207 },
    // Quiche Lorraine (208)
    { id: 101, quantity: 200, unit: "ml", ingredientId: 43, recipeId: 208 },
    // Mousse au Chocolat (303)
    { id: 102, quantity: 200, unit: "grammes", ingredientId: 44, recipeId: 303 },
    // Crème Brûlée (304)
    { id: 103, quantity: 500, unit: "ml", ingredientId: 43, recipeId: 304 },
    { id: 104, quantity: 1, unit: "unité", ingredientId: 46, recipeId: 304 },
    { id: 105, quantity: 50, unit: "grammes", ingredientId: 45, recipeId: 304 },
    // Gâteau au Yaourt (305)
    { id: 106, quantity: 1, unit: "pot", ingredientId: 31, recipeId: 305 },
    { id: 107, quantity: 3, unit: "pots", ingredientId: 35, recipeId: 305 },
    { id: 108, quantity: 1, unit: "sachet", ingredientId: 47, recipeId: 305 },
    // Panna Cotta (306)
    { id: 109, quantity: 500, unit: "ml", ingredientId: 43, recipeId: 306 },
    { id: 110, quantity: 3, unit: "feuilles", ingredientId: 48, recipeId: 306 },
    { id: 111, quantity: 150, unit: "grammes", ingredientId: 49, recipeId: 306 },
    // Fondant au Chocolat (307)
    { id: 112, quantity: 200, unit: "grammes", ingredientId: 44, recipeId: 307 },
    { id: 113, quantity: 50, unit: "grammes", ingredientId: 35, recipeId: 307 },
    // Tarte au Citron Meringuée (308)
    { id: 114, quantity: 3, unit: "unités", ingredientId: 50, recipeId: 308 },
];
const recipeInstructions = [
    // Bruschetta (101)
    {
        id: 1,
        step: 1,
        description: "Coupez les tomates en dés, ciselez le basilic et mélangez.",
        recipeId: 101,
    },
    {
        id: 2,
        step: 2,
        description: "Faites griller les tranches de pain et frottez-les avec la gousse d'ail.",
        recipeId: 101,
    },
    {
        id: 3,
        step: 3,
        description: "Garnissez le pain avec la préparation aux tomates et arrosez d'un filet d'huile d'olive.",
        recipeId: 101,
    },
    // Salade Grecque (102)
    {
        id: 4,
        step: 1,
        description: "Coupez le concombre, les tomates et l'oignon en morceaux.",
        recipeId: 102,
    },
    { id: 5, step: 2, description: "Ajoutez la feta en dés et les olives.", recipeId: 102 },
    {
        id: 6,
        step: 3,
        description: "Assaisonnez avec l'huile d'olive, du sel et du poivre.",
        recipeId: 102,
    },
    // Gaspacho (103)
    { id: 7, step: 1, description: "Lavez et coupez tous les légumes en morceaux.", recipeId: 103 },
    {
        id: 8,
        step: 2,
        description: "Mixez tous les ingrédients ensemble jusqu'à obtenir une texture lisse.",
        recipeId: 103,
    },
    {
        id: 9,
        step: 3,
        description: "Placez au réfrigérateur pendant au moins 2 heures avant de servir.",
        recipeId: 103,
    },
    // Velouté de Potimarron (104)
    {
        id: 10,
        step: 1,
        description: "Faites revenir l'oignon et l'ail émincés dans une casserole avec de l'huile.",
        recipeId: 104,
    },
    {
        id: 11,
        step: 2,
        description: "Ajoutez le potimarron en morceaux, couvrez d'eau et laissez cuire 20 minutes.",
        recipeId: 104,
    },
    {
        id: 12,
        step: 3,
        description: "Mixez la soupe jusqu'à obtenir un velouté onctueux. Assaisonnez.",
        recipeId: 104,
    },
    // Salade de Chèvre Chaud (105)
    { id: 13, step: 1, description: "Préparez la salade verte avec une vinaigrette.", recipeId: 105 },
    {
        id: 14,
        step: 2,
        description: "Faites griller les tranches de pain avec le fromage de chèvre dessus.",
        recipeId: 105,
    },
    {
        id: 15,
        step: 3,
        description: "Déposez les toasts chauds sur la salade et servez immédiatement.",
        recipeId: 105,
    },
    // Tzatziki (106)
    {
        id: 16,
        step: 1,
        description: "Râpez le concombre et laissez-le dégorger avec un peu de sel.",
        recipeId: 106,
    },
    {
        id: 17,
        step: 2,
        description: "Mélangez le yaourt avec l'ail haché, l'huile d'olive et le concombre bien essoré.",
        recipeId: 106,
    },
    { id: 18, step: 3, description: "Réservez au frais avant de servir.", recipeId: 106 },
    // Pâtes Carbonara (201)
    {
        id: 19,
        step: 1,
        description: "Faites cuire les pâtes. Pendant ce temps, faites dorer la pancetta.",
        recipeId: 201,
    },
    {
        id: 20,
        step: 2,
        description: "Mélangez les jaunes d'œufs avec le parmesan et le poivre.",
        recipeId: 201,
    },
    {
        id: 21,
        step: 3,
        description: "Hors du feu, mélangez les pâtes égouttées avec la pancetta et la sauce aux œufs.",
        recipeId: 201,
    },
    // Poulet Rôti (202)
    {
        id: 22,
        step: 1,
        description: "Préchauffez le four à 200°C. Massez le poulet avec le beurre, l'ail et les herbes.",
        recipeId: 202,
    },
    {
        id: 23,
        step: 2,
        description: "Enfournez pour 1h15, en arrosant régulièrement le poulet avec son jus.",
        recipeId: 202,
    },
    { id: 24, step: 3, description: "Laissez reposer 10 minutes avant de découper.", recipeId: 202 },
    // Lasagnes (203)
    { id: 25, step: 1, description: "Préparez la sauce bolognaise et la béchamel.", recipeId: 203 },
    {
        id: 26,
        step: 2,
        description: "Montez les lasagnes en alternant les couches : pâtes, bolognaise, béchamel, parmesan.",
        recipeId: 203,
    },
    {
        id: 27,
        step: 3,
        description: "Terminez par une couche de béchamel et de parmesan, puis enfournez 30 minutes à 180°C.",
        recipeId: 203,
    },
    // Hachis Parmentier (204)
    { id: 28, step: 1, description: "Préparez une purée de pommes de terre maison.", recipeId: 204 },
    { id: 29, step: 2, description: "Faites revenir la viande hachée avec l'oignon.", recipeId: 204 },
    {
        id: 30,
        step: 3,
        description: "Dans un plat, étalez la viande puis recouvrez avec la purée. Gratinez au four.",
        recipeId: 204,
    },
    // Curry de Poulet (205)
    {
        id: 31,
        step: 1,
        description: "Faites dorer le poulet en morceaux avec l'oignon et l'ail.",
        recipeId: 205,
    },
    {
        id: 32,
        step: 2,
        description: "Ajoutez le lait de coco et laissez mijoter 15 minutes.",
        recipeId: 205,
    },
    { id: 33, step: 3, description: "Servez chaud avec du riz basmati.", recipeId: 205 },
    // Risotto (206)
    {
        id: 34,
        step: 1,
        description: "Faites revenir l'oignon, ajoutez le riz et le faire nacrer.",
        recipeId: 206,
    },
    {
        id: 35,
        step: 2,
        description: "Ajoutez du bouillon louche par louche jusqu'à cuisson complète du riz.",
        recipeId: 206,
    },
    {
        id: 36,
        step: 3,
        description: "Incorporez les champignons poêlés, le parmesan et le beurre. Mélangez bien.",
        recipeId: 206,
    },
    // Magret (207)
    {
        id: 37,
        step: 1,
        description: "Quadrillez la peau du magret et faites-le cuire côté peau dans une poêle chaude.",
        recipeId: 207,
    },
    {
        id: 38,
        step: 2,
        description: "Videz la graisse, déglacez avec du vinaigre balsamique et ajoutez le miel.",
        recipeId: 207,
    },
    { id: 39, step: 3, description: "Nappez le magret de sauce et servez.", recipeId: 207 },
    // Quiche Lorraine (208)
    {
        id: 40,
        step: 1,
        description: "Foncez un moule avec la pâte. Répartissez les lardons préalablement dorés.",
        recipeId: 208,
    },
    {
        id: 41,
        step: 2,
        description: "Mélangez les œufs et la crème. Versez sur les lardons.",
        recipeId: 208,
    },
    { id: 42, step: 3, description: "Enfournez 40 minutes à 180°C.", recipeId: 208 },
    // Tiramisu (301)
    {
        id: 43,
        step: 1,
        description: "Mélangez les jaunes d'œufs et le sucre. Ajoutez le mascarpone.",
        recipeId: 301,
    },
    {
        id: 44,
        step: 2,
        description: "Montez les blancs en neige et incorporez-les. Trempez les biscuits dans le café.",
        recipeId: 301,
    },
    {
        id: 45,
        step: 3,
        description: "Alternez couches de biscuits et de crème. Saupoudrez de cacao.",
        recipeId: 301,
    },
    // Tarte aux Pommes (302)
    {
        id: 46,
        step: 1,
        description: "Foncez un moule avec la pâte. Disposez les lamelles de pommes.",
        recipeId: 302,
    },
    {
        id: 47,
        step: 2,
        description: "Saupoudrez de sucre et de cannelle, ajoutez des noix de beurre.",
        recipeId: 302,
    },
    { id: 48, step: 3, description: "Cuire 30 minutes à 180°C.", recipeId: 302 },
    // Mousse au Chocolat (303)
    {
        id: 49,
        step: 1,
        description: "Faites fondre le chocolat. Séparez les blancs des jaunes d'œufs.",
        recipeId: 303,
    },
    {
        id: 50,
        step: 2,
        description: "Incorporez les jaunes au chocolat. Montez les blancs en neige avec le sucre.",
        recipeId: 303,
    },
    {
        id: 51,
        step: 3,
        description: "Mélangez délicatement les deux préparations. Réfrigérez 4 heures.",
        recipeId: 303,
    },
    // Crème Brûlée (304)
    {
        id: 52,
        step: 1,
        description: "Mélangez les jaunes et le sucre. Incorporez la crème liquide chaude.",
        recipeId: 304,
    },
    {
        id: 53,
        step: 2,
        description: "Versez dans des ramequins et cuire 1h au bain-marie à 100°C.",
        recipeId: 304,
    },
    {
        id: 54,
        step: 3,
        description: "Laissez refroidir, puis saupoudrez de cassonade et caramélisez au chalumeau.",
        recipeId: 304,
    },
    // Gâteau au Yaourt (305)
    {
        id: 55,
        step: 1,
        description: "Mélangez tous les ingrédients dans l'ordre : yaourt, sucre, œufs, farine, levure, huile.",
        recipeId: 305,
    },
    { id: 56, step: 2, description: "Versez dans un moule beurré et fariné.", recipeId: 305 },
    { id: 57, step: 3, description: "Cuire 30 minutes à 180°C.", recipeId: 305 },
    // Panna Cotta (306)
    { id: 58, step: 1, description: "Faites chauffer la crème avec le sucre.", recipeId: 306 },
    {
        id: 59,
        step: 2,
        description: "Hors du feu, ajoutez la gélatine ramollie. Versez dans des verrines.",
        recipeId: 306,
    },
    {
        id: 60,
        step: 3,
        description: "Laissez prendre au frais 4 heures. Servez avec un coulis de fruits rouges.",
        recipeId: 306,
    },
    // Fondant (307)
    { id: 61, step: 1, description: "Faites fondre le chocolat et le beurre.", recipeId: 307 },
    { id: 62, step: 2, description: "Ajoutez le sucre, les œufs et la farine.", recipeId: 307 },
    {
        id: 63,
        step: 3,
        description: "Versez dans des moules et cuire 12 minutes à 210°C.",
        recipeId: 307,
    },
    // Tarte au Citron (308)
    {
        id: 64,
        step: 1,
        description: "Préparez la crème au citron et garnissez le fond de tarte précuit.",
        recipeId: 308,
    },
    {
        id: 65,
        step: 2,
        description: "Préparez la meringue italienne en montant les blancs avec un sirop de sucre.",
        recipeId: 308,
    },
    {
        id: 66,
        step: 3,
        description: "Pochez la meringue sur la tarte et dorez-la au chalumeau.",
        recipeId: 308,
    },
];
const recipes = [
    // Entrées
    { id: 101, title: "Bruschetta", description: "Une entrée italienne classique." },
    { id: 102, title: "Salade Grecque", description: "Une salade fraîche et savoureuse." },
    {
        id: 103,
        title: "Gaspacho Andalou",
        description: "Soupe froide espagnole, parfaite pour l'été.",
    },
    {
        id: 104,
        title: "Velouté de Potimarron",
        description: "Un velouté doux et réconfortant aux saveurs d'automne.",
    },
    {
        id: 105,
        title: "Salade de Chèvre Chaud",
        description: "Salade gourmande avec du chèvre chaud sur toast.",
    },
    {
        id: 106,
        title: "Tzatziki",
        description: "Spécialité grecque à base de concombre et de yaourt.",
    },
    // Plats principaux
    { id: 201, title: "Pâtes carbonara", description: "Un plat italien riche et crémeux." },
    { id: 202, title: "Poulet rôti", description: "Un poulet rôti aux herbes de Provence." },
    {
        id: 203,
        title: "Lasagnes à la bolognaise",
        description: "Le grand classique italien, généreux et familial.",
    },
    {
        id: 204,
        title: "Hachis parmentier",
        description: "Un plat traditionnel français avec purée de pommes de terre et viande hachée.",
    },
    {
        id: 205,
        title: "Curry de poulet au lait de coco",
        description: "Un plat exotique, doux et parfumé.",
    },
    {
        id: 206,
        title: "Risotto aux champignons",
        description: "Un risotto crémeux et savoureux aux champignons de Paris.",
    },
    {
        id: 207,
        title: "Magret de canard au miel",
        description: "Une recette sucrée-salée élégante et rapide à préparer.",
    },
    {
        id: 208,
        title: "Quiche lorraine",
        description: "Une tarte salée traditionnelle de la cuisine lorraine.",
    },
    // Desserts
    { id: 301, title: "Tiramisu", description: "Un dessert italien classique." },
    { id: 302, title: "Tarte aux pommes", description: "Une tarte sucrée à la cannelle." },
    {
        id: 303,
        title: "Mousse au chocolat",
        description: "Une mousse intense et aérienne pour les amateurs de chocolat.",
    },
    {
        id: 304,
        title: "Crème brûlée",
        description: "Dessert onctueux avec une fine couche de caramel croquant.",
    },
    {
        id: 305,
        title: "Gâteau au yaourt",
        description: "Le gâteau le plus simple et rapide à réaliser, parfait pour le goûter.",
    },
    {
        id: 306,
        title: "Pannacotta aux fruits rouges",
        description: "Un dessert italien frais, léger et crémeux.",
    },
    {
        id: 307,
        title: "Fondant au chocolat",
        description: "Un petit gâteau individuel au cœur coulant de chocolat.",
    },
    {
        id: 308,
        title: "Tarte au citron meringuée",
        description: "L'équilibre parfait entre l'acidité du citron et la douceur de la meringue.",
    },
];
const recipeComments = [
    {
        id: 1,
        username: "Alice",
        content: "Délicieux et facile à préparer !",
        note: 5,
        createdAt: new Date("2025-07-27T12:43:10Z"),
        recipeId: 101,
    },
    {
        id: 2,
        username: "Bob",
        content: "J'adore les bruschettas, mais j'aurais aimé plus de basilic.",
        note: 4,
        createdAt: new Date("2025-07-28T14:00:15Z"),
        recipeId: 101,
    },
    {
        id: 3,
        username: "Charlie",
        content: "Rafraîchissant et parfait pour l'été !",
        note: 5,
        createdAt: new Date("2025-07-28T16:21:10Z"),
        recipeId: 102,
    },
    {
        id: 4,
        username: "David",
        content: "Très bon, mais un peu trop salé à mon goût.",
        note: 4,
        createdAt: new Date("2025-07-29T18:30:00Z"),
        recipeId: 201,
    },
    {
        id: 5,
        username: "Eve",
        content: "Parfait pour un dîner en famille !",
        note: 5,
        createdAt: new Date("2025-07-29T19:00:50Z"),
        recipeId: 202,
    },
    {
        id: 6,
        username: "Frank",
        content: "Le poulet était un peu sec.",
        note: 3,
        createdAt: new Date("2025-07-30T20:05:30Z"),
        recipeId: 202,
    },
    {
        id: 7,
        username: "Grace",
        content: "Un dessert italien classique, tout simplement délicieux !",
        note: 5,
        createdAt: new Date("2025-07-28T21:10:00Z"),
        recipeId: 301,
    },
    {
        id: 8,
        username: "Hank",
        content: "La tarte était délicieuse, mais j'aurais aimé plus de cannelle.",
        note: 4,
        createdAt: new Date("2025-07-29T15:45:12Z"),
        recipeId: 302,
    },
    {
        id: 9,
        username: "Leo",
        content: "Incroyable ce gaspacho, super recette !",
        note: 5,
        createdAt: new Date("2025-07-29T12:00:00Z"),
        recipeId: 103,
    },
    {
        id: 10,
        username: "Zoe",
        content: "Très bon velouté, j'ai ajouté des châtaignes.",
        note: 5,
        createdAt: new Date("2025-07-30T19:30:00Z"),
        recipeId: 104,
    },
    {
        id: 11,
        username: "Tom",
        content: "La meilleure salade de chèvre chaud.",
        note: 5,
        createdAt: new Date("2025-07-28T13:00:00Z"),
        recipeId: 105,
    },
    {
        id: 12,
        username: "Mia",
        content: "Ma famille a adoré les lasagnes.",
        note: 5,
        createdAt: new Date("2025-07-29T20:15:00Z"),
        recipeId: 203,
    },
    {
        id: 13,
        username: "Noah",
        content: "Super curry, pas trop épicé, juste parfait.",
        note: 5,
        createdAt: new Date("2025-07-30T18:55:00Z"),
        recipeId: 205,
    },
    {
        id: 14,
        username: "Emma",
        content: "Le risotto était très crémeux, merci !",
        note: 5,
        createdAt: new Date("2025-07-28T20:45:00Z"),
        recipeId: 206,
    },
    {
        id: 15,
        username: "Liam",
        content: "La cuisson du magret était parfaite grâce à vos conseils.",
        note: 5,
        createdAt: new Date("2025-07-29T21:00:00Z"),
        recipeId: 207,
    },
    {
        id: 16,
        username: "Olivia",
        content: "Mousse au chocolat validée par les enfants !",
        note: 5,
        createdAt: new Date("2025-07-28T16:00:00Z"),
        recipeId: 303,
    },
    {
        id: 17,
        username: "William",
        content: "La crème était un peu trop liquide.",
        note: 3,
        createdAt: new Date("2025-07-30T22:00:00Z"),
        recipeId: 304,
    },
    {
        id: 18,
        username: "Sophia",
        content: "Le gâteau au yaourt le plus moelleux que j'ai fait.",
        note: 5,
        createdAt: new Date("2025-07-29T10:30:00Z"),
        recipeId: 305,
    },
    {
        id: 19,
        username: "James",
        content: "Très frais la panna cotta, une belle découverte.",
        note: 4,
        createdAt: new Date("2025-07-30T14:00:00Z"),
        recipeId: 306,
    },
    {
        id: 20,
        username: "Isabella",
        content: "Le fondant était incroyable, coeur coulant réussi !",
        note: 5,
        createdAt: new Date("2025-07-28T22:30:00Z"),
        recipeId: 307,
    },
    {
        id: 21,
        username: "Lucas",
        content: "Un peu compliqué la meringue, mais le résultat est top.",
        note: 4,
        createdAt: new Date("2025-07-29T17:00:00Z"),
        recipeId: 308,
    },
    {
        id: 22,
        username: "Bob",
        content: "J'ai ajouté du poivron au gaspacho, c'était top.",
        note: 5,
        createdAt: new Date("2025-07-30T11:00:00Z"),
        recipeId: 103,
    },
    {
        id: 23,
        username: "Alice",
        content: "La meilleure carbonara, sans crème, la vraie !",
        note: 5,
        createdAt: new Date("2025-07-30T19:10:00Z"),
        recipeId: 201,
    },
    {
        id: 24,
        username: "Charlie",
        content: "Tiramisu un peu trop imbibé de café à mon goût.",
        note: 3,
        createdAt: new Date("2025-07-29T09:00:00Z"),
        recipeId: 301,
    },
    {
        id: 25,
        username: "Grace",
        content: "Le hachis parmentier de mon enfance.",
        note: 5,
        createdAt: new Date("2025-07-30T12:30:00Z"),
        recipeId: 204,
    },
    {
        id: 26,
        username: "Frank",
        content: "La quiche était bonne mais la pâte un peu molle.",
        note: 3,
        createdAt: new Date("2025-07-29T13:45:00Z"),
        recipeId: 208,
    },
    {
        id: 27,
        username: "Zoe",
        content: "Le Tzatziki est parfait pour l'apéritif d'été.",
        note: 5,
        createdAt: new Date("2025-07-28T18:00:00Z"),
        recipeId: 106,
    },
    {
        id: 28,
        username: "David",
        content: "J'ai raté mon fondant, il était trop cuit.",
        note: 2,
        createdAt: new Date("2025-07-30T21:00:00Z"),
        recipeId: 307,
    },
    {
        id: 29,
        username: "Mia",
        content: "Les enfants ont adoré le gâteau au yaourt !",
        note: 5,
        createdAt: new Date("2025-07-30T16:30:00Z"),
        recipeId: 305,
    },
    {
        id: 30,
        username: "Leo",
        content: "La tarte au citron est ma nouvelle recette préférée.",
        note: 5,
        createdAt: new Date("2025-07-30T18:20:00Z"),
        recipeId: 308,
    },
    // Nouveaux commentaires générés
    // Bruschetta (101)
    {
        id: 31,
        username: "Gourmand75",
        content: "Simple, efficace et délicieux. Un classique indémodable.",
        note: 5,
        createdAt: new Date("2025-07-10T18:00:00Z"),
        recipeId: 101,
    },
    {
        id: 32,
        username: "LeCritiqueGastro",
        content: "Fade. Manque cruellement d'assaisonnement. Le pain n'était pas assez grillé.",
        note: 1,
        createdAt: new Date("2025-07-11T19:00:00Z"),
        recipeId: 101,
    },
    {
        id: 33,
        username: "CuisineDuDimanche",
        content: "Le pain a tout détrempé. Dommage.",
        note: 2,
        createdAt: new Date("2025-07-12T12:30:00Z"),
        recipeId: 101,
    },
    {
        id: 34,
        username: "MiamMiam",
        content: "Bonne recette de base, j'ajoute des copeaux de parmesan pour plus de gourmandise.",
        note: 4,
        createdAt: new Date("2025-07-13T17:45:00Z"),
        recipeId: 101,
    },
    // Salade Grecque (102)
    {
        id: 35,
        username: "FoodieParis",
        content: "Le goût de mes vacances en Grèce. Parfaitement assaisonnée.",
        note: 5,
        createdAt: new Date("2025-07-14T13:00:00Z"),
        recipeId: 102,
    },
    {
        id: 36,
        username: "SimpleEtBon",
        content: "Bonne salade, mais trop d'oignon rouge à mon goût.",
        note: 3,
        createdAt: new Date("2025-07-15T12:00:00Z"),
        recipeId: 102,
    },
    {
        id: 37,
        username: "PapaCuisine",
        content: "J'ai ajouté un peu d'origan séché, ça change tout !",
        note: 5,
        createdAt: new Date("2025-07-16T20:10:00Z"),
        recipeId: 102,
    },
    {
        id: 38,
        username: "SophieGourmande",
        content: "Pas fan de la feta utilisée, une prochaine fois j'en prendrai une de meilleure qualité.",
        note: 2,
        createdAt: new Date("2025-07-17T19:25:00Z"),
        recipeId: 102,
    },
    // Gaspacho Andalou (103)
    {
        id: 39,
        username: "EpicurienDu21",
        content: "Recette suivie à la lettre, le résultat était trop liquide.",
        note: 2,
        createdAt: new Date("2025-07-18T21:00:00Z"),
        recipeId: 103,
    },
    {
        id: 40,
        username: "MamaGato",
        content: "Parfait pour se rafraîchir ! La texture était idéale.",
        note: 5,
        createdAt: new Date("2025-07-19T14:00:00Z"),
        recipeId: 103,
    },
    {
        id: 41,
        username: "LudoCuisine",
        content: "Manquait un peu de peps. J'ai rajouté une pointe de Tabasco.",
        note: 4,
        createdAt: new Date("2025-07-20T11:00:00Z"),
        recipeId: 103,
    },
    {
        id: 42,
        username: "RecetteTesteur",
        content: "Recette correcte, mais j'ai déjà goûté bien meilleur.",
        note: 3,
        createdAt: new Date("2025-07-21T16:50:00Z"),
        recipeId: 103,
    },
    // Velouté de Potimarron (104)
    {
        id: 43,
        username: "ChefEnHerbe",
        content: "Très doux et réconfortant. Un délice d'automne.",
        note: 5,
        createdAt: new Date("2025-07-22T19:30:00Z"),
        recipeId: 104,
    },
    {
        id: 44,
        username: "Gourmand75",
        content: "J'ai remplacé une partie de l'eau par du lait de coco, c'était excellent.",
        note: 5,
        createdAt: new Date("2025-07-23T20:00:00Z"),
        recipeId: 104,
    },
    {
        id: 45,
        username: "LeCritiqueGastro",
        content: "Texture granuleuse et manque de goût. Très décevant.",
        note: 1,
        createdAt: new Date("2025-07-24T18:45:00Z"),
        recipeId: 104,
    },
    {
        id: 46,
        username: "MiamMiam",
        content: "Bon velouté, mais il faut bien assaisonner.",
        note: 3,
        createdAt: new Date("2025-07-25T20:15:00Z"),
        recipeId: 104,
    },
    // Salade de Chèvre Chaud (105)
    {
        id: 47,
        username: "FoodieParis",
        content: "Le fromage n'était pas assez coulant. Temps de cuisson à revoir.",
        note: 3,
        createdAt: new Date("2025-07-26T13:20:00Z"),
        recipeId: 105,
    },
    {
        id: 48,
        username: "SimpleEtBon",
        content: "Une valeur sûre. J'ajoute quelques noix pour le croquant.",
        note: 5,
        createdAt: new Date("2025-07-27T12:10:00Z"),
        recipeId: 105,
    },
    {
        id: 49,
        username: "PapaCuisine",
        content: "Très simple mais tellement bon. Parfait pour un repas léger.",
        note: 4,
        createdAt: new Date("2025-07-28T20:30:00Z"),
        recipeId: 105,
    },
    {
        id: 50,
        username: "SophieGourmande",
        content: "La salade n'était pas assez fraîche, ça a tout gâché.",
        note: 2,
        createdAt: new Date("2025-07-29T19:40:00Z"),
        recipeId: 105,
    },
    // Tzatziki (106)
    {
        id: 51,
        username: "EpicurienDu21",
        content: "Le concombre a rendu trop d'eau, c'était très liquide.",
        note: 2,
        createdAt: new Date("2025-07-30T21:15:00Z"),
        recipeId: 106,
    },
    {
        id: 52,
        username: "MamaGato",
        content: "Très frais, parfait avec des blinis maison.",
        note: 5,
        createdAt: new Date("2025-07-31T14:30:00Z"),
        recipeId: 106,
    },
    {
        id: 53,
        username: "LudoCuisine",
        content: "Bon, mais j'ajoute une touche de menthe ciselée.",
        note: 4,
        createdAt: new Date("2025-08-01T11:20:00Z"),
        recipeId: 106,
    },
    {
        id: 54,
        username: "RecetteTesteur",
        content: "Recette beaucoup trop aillée, impossible de manger.",
        note: 1,
        createdAt: new Date("2025-08-02T17:00:00Z"),
        recipeId: 106,
    },
    // Pâtes Carbonara (201)
    {
        id: 55,
        username: "ChefEnHerbe",
        content: "Enfin une vraie recette de carbo sans crème ! Excellente.",
        note: 5,
        createdAt: new Date("2025-07-10T19:50:00Z"),
        recipeId: 201,
    },
    {
        id: 56,
        username: "Gourmand75",
        content: "Les jaunes d'oeufs ont cuit, ça a fait des grumeaux... Je suis déçu.",
        note: 2,
        createdAt: new Date("2025-07-11T20:10:00Z"),
        recipeId: 201,
    },
    {
        id: 57,
        username: "LeCritiqueGastro",
        content: "Manque de poivre et pancetta pas assez grillée. Peut mieux faire.",
        note: 3,
        createdAt: new Date("2025-07-12T18:55:00Z"),
        recipeId: 201,
    },
    {
        id: 58,
        username: "MiamMiam",
        content: "Un régal ! J'ai utilisé du guanciale comme en Italie.",
        note: 5,
        createdAt: new Date("2025-07-13T20:25:00Z"),
        recipeId: 201,
    },
    // Poulet Rôti (202)
    {
        id: 59,
        username: "FoodieParis",
        content: "La cuisson était parfaite, la peau bien croustillante et la chair moelleuse.",
        note: 5,
        createdAt: new Date("2025-07-14T13:40:00Z"),
        recipeId: 202,
    },
    {
        id: 60,
        username: "SimpleEtBon",
        content: "Bon poulet du dimanche. Simple et efficace.",
        note: 4,
        createdAt: new Date("2025-07-15T12:30:00Z"),
        recipeId: 202,
    },
    {
        id: 61,
        username: "PapaCuisine",
        content: "Le mien était trop cuit et sec. J'ai dû mal régler le four.",
        note: 2,
        createdAt: new Date("2025-07-16T20:50:00Z"),
        recipeId: 202,
    },
    {
        id: 62,
        username: "SophieGourmande",
        content: "Les herbes de Provence ont brûlé sur le dessus. Odeur âcre.",
        note: 2,
        createdAt: new Date("2025-07-17T19:55:00Z"),
        recipeId: 202,
    },
    // Lasagnes à la bolognaise (203)
    {
        id: 63,
        username: "EpicurienDu21",
        content: "Un plat généreux et savoureux. Toute la famille a adoré !",
        note: 5,
        createdAt: new Date("2025-07-18T21:35:00Z"),
        recipeId: 203,
    },
    {
        id: 64,
        username: "MamaGato",
        content: "Très bonnes, mais la préparation est un peu longue.",
        note: 4,
        createdAt: new Date("2025-07-19T14:50:00Z"),
        recipeId: 203,
    },
    {
        id: 65,
        username: "LudoCuisine",
        content: "Ma béchamel était ratée, trop épaisse. Le résultat final était sec.",
        note: 2,
        createdAt: new Date("2025-07-20T11:40:00Z"),
        recipeId: 203,
    },
    {
        id: 66,
        username: "RecetteTesteur",
        content: "Pas assez de fromage à mon goût.",
        note: 3,
        createdAt: new Date("2025-07-21T17:10:00Z"),
        recipeId: 203,
    },
    // Hachis Parmentier (204)
    {
        id: 67,
        username: "ChefEnHerbe",
        content: "Un classique réconfortant. La purée maison fait toute la différence.",
        note: 5,
        createdAt: new Date("2025-07-22T20:00:00Z"),
        recipeId: 204,
    },
    {
        id: 68,
        username: "Gourmand75",
        content: "La viande était un peu sèche. Peut-être ajouter un peu de sauce tomate ?",
        note: 3,
        createdAt: new Date("2025-07-23T20:30:00Z"),
        recipeId: 204,
    },
    {
        id: 69,
        username: "LeCritiqueGastro",
        content: "Plat de cantine. Aucun intérêt gastronomique.",
        note: 1,
        createdAt: new Date("2025-07-24T19:15:00Z"),
        recipeId: 204,
    },
    {
        id: 70,
        username: "MiamMiam",
        content: "J'ai ajouté du gruyère râpé sur la purée, c'était parfait !",
        note: 4,
        createdAt: new Date("2025-07-25T20:45:00Z"),
        recipeId: 204,
    },
    // Curry de poulet (205)
    {
        id: 71,
        username: "FoodieParis",
        content: "Parfumé et délicieux. J'ai ajouté des légumes (carottes et courgettes), un délice.",
        note: 5,
        createdAt: new Date("2025-07-26T13:50:00Z"),
        recipeId: 205,
    },
    {
        id: 72,
        username: "SimpleEtBon",
        content: "Pas assez relevé. Le curry manquait de puissance.",
        note: 3,
        createdAt: new Date("2025-07-27T12:40:00Z"),
        recipeId: 205,
    },
    {
        id: 73,
        username: "PapaCuisine",
        content: "La sauce était trop liquide. J'ai dû ajouter de la maïzena.",
        note: 3,
        createdAt: new Date("2025-07-28T21:00:00Z"),
        recipeId: 205,
    },
    {
        id: 74,
        username: "SophieGourmande",
        content: "Recette rapide et qui plaît à tout le monde, je la fais souvent.",
        note: 5,
        createdAt: new Date("2025-07-29T20:10:00Z"),
        recipeId: 205,
    },
    // Risotto aux champignons (206)
    {
        id: 75,
        username: "EpicurienDu21",
        content: "Le riz n'a pas cuit correctement, il est resté croquant.",
        note: 2,
        createdAt: new Date("2025-07-30T21:45:00Z"),
        recipeId: 206,
    },
    {
        id: 76,
        username: "MamaGato",
        content: "Crémeux à souhait ! Le secret est de bien remuer.",
        note: 5,
        createdAt: new Date("2025-07-31T15:00:00Z"),
        recipeId: 206,
    },
    {
        id: 77,
        username: "LudoCuisine",
        content: "Très bon, mais un peu lourd.",
        note: 4,
        createdAt: new Date("2025-08-01T11:50:00Z"),
        recipeId: 206,
    },
    {
        id: 78,
        username: "RecetteTesteur",
        content: "Fade. Manque d'ail et de persil.",
        note: 2,
        createdAt: new Date("2025-08-02T17:20:00Z"),
        recipeId: 206,
    },
    // Magret de canard au miel (207)
    {
        id: 79,
        username: "ChefEnHerbe",
        content: "La peau était croustillante et la viande rosée, une réussite !",
        note: 5,
        createdAt: new Date("2025-07-10T20:10:00Z"),
        recipeId: 207,
    },
    {
        id: 80,
        username: "Gourmand75",
        content: "La sauce était trop sucrée à mon goût.",
        note: 3,
        createdAt: new Date("2025-07-11T20:40:00Z"),
        recipeId: 207,
    },
    {
        id: 81,
        username: "LeCritiqueGastro",
        content: "Viande trop cuite. Un sacrilège pour un magret.",
        note: 1,
        createdAt: new Date("2025-07-12T19:25:00Z"),
        recipeId: 207,
    },
    {
        id: 82,
        username: "MiamMiam",
        content: "Super association sucré-salé. J'ai servi avec une purée de patates douces.",
        note: 5,
        createdAt: new Date("2025-07-13T21:00:00Z"),
        recipeId: 207,
    },
    // Quiche Lorraine (208)
    {
        id: 83,
        username: "FoodieParis",
        content: "La vraie quiche lorraine, sans fromage ! Délicieuse.",
        note: 5,
        createdAt: new Date("2025-07-14T14:00:00Z"),
        recipeId: 208,
    },
    {
        id: 84,
        username: "SimpleEtBon",
        content: "La pâte n'a pas bien cuit en dessous, c'était un peu cru.",
        note: 2,
        createdAt: new Date("2025-07-15T13:00:00Z"),
        recipeId: 208,
    },
    {
        id: 85,
        username: "PapaCuisine",
        content: "Appareil un peu trop liquide, ça a débordé.",
        note: 3,
        createdAt: new Date("2025-07-16T21:20:00Z"),
        recipeId: 208,
    },
    {
        id: 86,
        username: "SophieGourmande",
        content: "Bonne, mais un peu grasse.",
        note: 4,
        createdAt: new Date("2025-07-17T20:25:00Z"),
        recipeId: 208,
    },
    // Tiramisu (301)
    {
        id: 87,
        username: "EpicurienDu21",
        content: "Crème pas assez ferme, le tiramisu ne se tenait pas.",
        note: 2,
        createdAt: new Date("2025-07-18T22:00:00Z"),
        recipeId: 301,
    },
    {
        id: 88,
        username: "MamaGato",
        content: "La meilleure recette de tiramisu ! Onctueux et pas trop sucré.",
        note: 5,
        createdAt: new Date("2025-07-19T15:30:00Z"),
        recipeId: 301,
    },
    {
        id: 89,
        username: "LudoCuisine",
        content: "J'ai remplacé le café par du jus d'orange pour les enfants, ils ont adoré.",
        note: 5,
        createdAt: new Date("2025-07-20T12:10:00Z"),
        recipeId: 301,
    },
    {
        id: 90,
        username: "RecetteTesteur",
        content: "Trop de cacao, c'était amer.",
        note: 3,
        createdAt: new Date("2025-07-21T17:40:00Z"),
        recipeId: 301,
    },
    // Tarte aux pommes (302)
    {
        id: 91,
        username: "ChefEnHerbe",
        content: "Une tarte rustique et délicieuse. La cannelle fait toute la différence.",
        note: 5,
        createdAt: new Date("2025-07-22T20:30:00Z"),
        recipeId: 302,
    },
    {
        id: 92,
        username: "Gourmand75",
        content: "Les pommes ont rendu beaucoup d'eau, la pâte était détrempée.",
        note: 2,
        createdAt: new Date("2025-07-23T21:00:00Z"),
        recipeId: 302,
    },
    {
        id: 93,
        username: "LeCritiqueGastro",
        content: "Une simple tarte aux pommes. Rien d'extraordinaire.",
        note: 3,
        createdAt: new Date("2025-07-24T19:45:00Z"),
        recipeId: 302,
    },
    {
        id: 94,
        username: "MiamMiam",
        content: "J'ajoute une cuillère de compote sur le fond de tarte, c'est encore plus gourmand.",
        note: 4,
        createdAt: new Date("2025-07-25T21:15:00Z"),
        recipeId: 302,
    },
    // Mousse au chocolat (303)
    {
        id: 95,
        username: "FoodieParis",
        content: "Texture parfaite, légère et intense en chocolat. Un sans-faute !",
        note: 5,
        createdAt: new Date("2025-07-26T14:10:00Z"),
        recipeId: 303,
    },
    {
        id: 96,
        username: "SimpleEtBon",
        content: "Mes blancs en neige sont retombés, la mousse était compacte.",
        note: 2,
        createdAt: new Date("2025-07-27T13:10:00Z"),
        recipeId: 303,
    },
    {
        id: 97,
        username: "PapaCuisine",
        content: "Très bonne, mais très riche. En petites quantités c'est parfait.",
        note: 4,
        createdAt: new Date("2025-07-28T21:50:00Z"),
        recipeId: 303,
    },
    {
        id: 98,
        username: "SophieGourmande",
        content: "Recette ratée. Le chocolat a grainé.",
        note: 1,
        createdAt: new Date("2025-07-29T20:40:00Z"),
        recipeId: 303,
    },
    // Crème brûlée (304)
    {
        id: 99,
        username: "EpicurienDu21",
        content: "La crème était granuleuse, comme des oeufs brouillés. Inmangeable.",
        note: 1,
        createdAt: new Date("2025-07-30T22:15:00Z"),
        recipeId: 304,
    },
    {
        id: 100,
        username: "MamaGato",
        content: "Onctueuse et vanillée, avec un caramel bien craquant. Parfaite !",
        note: 5,
        createdAt: new Date("2025-07-31T15:50:00Z"),
        recipeId: 304,
    },
    {
        id: 101,
        username: "LudoCuisine",
        content: "La cuisson au bain-marie est un peu technique, mais le résultat en vaut la peine.",
        note: 4,
        createdAt: new Date("2025-08-01T12:30:00Z"),
        recipeId: 304,
    },
    {
        id: 102,
        username: "RecetteTesteur",
        content: "Bonne, mais manque de vanille.",
        note: 3,
        createdAt: new Date("2025-08-02T17:50:00Z"),
        recipeId: 304,
    },
    // Gâteau au yaourt (305)
    {
        id: 103,
        username: "ChefEnHerbe",
        content: "Le classique du goûter, inratable et toujours aussi bon.",
        note: 5,
        createdAt: new Date("2025-07-10T16:00:00Z"),
        recipeId: 305,
    },
    {
        id: 104,
        username: "Gourmand75",
        content: "Le mien était un peu sec.",
        note: 3,
        createdAt: new Date("2025-07-11T17:00:00Z"),
        recipeId: 305,
    },
    {
        id: 105,
        username: "LeCritiqueGastro",
        content: "Recette trop simple, sans finesse.",
        note: 2,
        createdAt: new Date("2025-07-12T15:00:00Z"),
        recipeId: 305,
    },
    {
        id: 106,
        username: "MiamMiam",
        content: "J'ajoute des pépites de chocolat, les enfants adorent.",
        note: 5,
        createdAt: new Date("2025-07-13T16:30:00Z"),
        recipeId: 305,
    },
    // Panna Cotta (306)
    {
        id: 107,
        username: "FoodieParis",
        content: "Très fraîche et légère. La texture était parfaite.",
        note: 5,
        createdAt: new Date("2025-07-14T15:00:00Z"),
        recipeId: 306,
    },
    {
        id: 108,
        username: "SimpleEtBon",
        content: "La gélatine n'a pas bien pris, c'est resté liquide.",
        note: 2,
        createdAt: new Date("2025-07-15T14:00:00Z"),
        recipeId: 306,
    },
    {
        id: 109,
        username: "PapaCuisine",
        content: "Très bon dessert, facile à faire. Le coulis de fruits rouges est indispensable.",
        note: 4,
        createdAt: new Date("2025-07-16T22:00:00Z"),
        recipeId: 306,
    },
    {
        id: 110,
        username: "SophieGourmande",
        content: "Trop de gélatine, la texture était caoutchouteuse.",
        note: 1,
        createdAt: new Date("2025-07-17T21:00:00Z"),
        recipeId: 306,
    },
    // Fondant au chocolat (307)
    {
        id: 111,
        username: "EpicurienDu21",
        content: "Coeur coulant parfaitement réussi ! Une tuerie.",
        note: 5,
        createdAt: new Date("2025-07-18T22:30:00Z"),
        recipeId: 307,
    },
    {
        id: 112,
        username: "MamaGato",
        content: "J'ai laissé cuire 2 minutes de trop et c'était un moelleux, pas un fondant. Bon quand même !",
        note: 3,
        createdAt: new Date("2025-07-19T16:00:00Z"),
        recipeId: 307,
    },
    {
        id: 113,
        username: "LudoCuisine",
        content: "Extrêmement sucré, presque écoeurant.",
        note: 2,
        createdAt: new Date("2025-07-20T13:00:00Z"),
        recipeId: 307,
    },
    {
        id: 114,
        username: "RecetteTesteur",
        content: "Simple, rapide, et délicieux. Que demander de plus ?",
        note: 5,
        createdAt: new Date("2025-07-21T18:00:00Z"),
        recipeId: 307,
    },
    // Tarte au citron meringuée (308)
    {
        id: 115,
        username: "ChefEnHerbe",
        content: "L'équilibre parfait entre l'acidité du citron et le sucré de la meringue.",
        note: 5,
        createdAt: new Date("2025-07-22T21:00:00Z"),
        recipeId: 308,
    },
    {
        id: 116,
        username: "Gourmand75",
        content: "Ma meringue a grainé et était toute liquide. Impossible de la pocher.",
        note: 1,
        createdAt: new Date("2025-07-23T21:30:00Z"),
        recipeId: 308,
    },
    {
        id: 117,
        username: "LeCritiqueGastro",
        content: "La crème au citron était beaucoup trop acide.",
        note: 2,
        createdAt: new Date("2025-07-24T20:15:00Z"),
        recipeId: 308,
    },
    {
        id: 118,
        username: "MiamMiam",
        content: "C'est ma tarte préférée ! Celle-ci est particulièrement réussie.",
        note: 5,
        createdAt: new Date("2025-07-25T21:45:00Z"),
        recipeId: 308,
    },
    // Ajout de commentaires supplémentaires pour atteindre 200+
    {
        id: 119,
        username: "PastryFan",
        content: "J'ai trouvé la crème au citron un peu trop sucrée, mais la meringue était parfaite.",
        note: 4,
        createdAt: new Date("2025-06-01T19:00:00Z"),
        recipeId: 308,
    },
    {
        id: 120,
        username: "AmateurDeBonneChere",
        content: "La pâte n'était pas assez cuite. Il faudrait la précuire à blanc plus longtemps.",
        note: 3,
        createdAt: new Date("2025-06-02T18:00:00Z"),
        recipeId: 308,
    },
    {
        id: 121,
        username: "SpatuleEnSucre",
        content: "Mon gâteau au yaourt a bien gonflé, super moelleux !",
        note: 5,
        createdAt: new Date("2025-06-03T15:00:00Z"),
        recipeId: 305,
    },
    {
        id: 122,
        username: "CasseroleMagique",
        content: "Un peu basique le gâteau au yaourt, j'ai ajouté un zeste de citron pour le parfumer.",
        note: 4,
        createdAt: new Date("2025-06-04T16:00:00Z"),
        recipeId: 305,
    },
    {
        id: 123,
        username: "ElodieCooks",
        content: "Mon fondant au chocolat était trop cuit, plus de coeur coulant. Déçue.",
        note: 2,
        createdAt: new Date("2025-06-05T20:00:00Z"),
        recipeId: 307,
    },
    {
        id: 124,
        username: "MarcEnCuisine",
        content: "Meilleure recette de fondant, inratable si on surveille bien la cuisson !",
        note: 5,
        createdAt: new Date("2025-06-06T21:00:00Z"),
        recipeId: 307,
    },
    {
        id: 125,
        username: "PastryFan",
        content: "La panna cotta se tenait parfaitement. Servie avec un coulis de mangue, c'était divin.",
        note: 5,
        createdAt: new Date("2025-06-07T14:00:00Z"),
        recipeId: 306,
    },
    {
        id: 126,
        username: "AmateurDeBonneChere",
        content: "La panna cotta manquait de goût. Peut-être infuser la crème avec de la vanille ?",
        note: 3,
        createdAt: new Date("2025-06-08T13:00:00Z"),
        recipeId: 306,
    },
    {
        id: 127,
        username: "SpatuleEnSucre",
        content: "Mes enfants n'ont pas aimé la mousse au chocolat, ils l'ont trouvée trop amère.",
        note: 2,
        createdAt: new Date("2025-06-09T17:00:00Z"),
        recipeId: 303,
    },
    {
        id: 128,
        username: "CasseroleMagique",
        content: "Mousse aérienne et forte en cacao, tout ce que j'aime.",
        note: 5,
        createdAt: new Date("2025-06-10T18:00:00Z"),
        recipeId: 303,
    },
    {
        id: 129,
        username: "ElodieCooks",
        content: "La caramélisation de ma crème brûlée était ratée, ça a fait des paquets.",
        note: 3,
        createdAt: new Date("2025-06-11T21:00:00Z"),
        recipeId: 304,
    },
    {
        id: 130,
        username: "MarcEnCuisine",
        content: "Recette parfaite. J'ai utilisé de la vergeoise pour caraméliser, c'est encore meilleur.",
        note: 5,
        createdAt: new Date("2025-06-12T20:00:00Z"),
        recipeId: 304,
    },
    {
        id: 131,
        username: "PastryFan",
        content: "La tarte aux pommes de grand-mère. Simple, mais si réconfortante.",
        note: 5,
        createdAt: new Date("2025-06-13T16:00:00Z"),
        recipeId: 302,
    },
    {
        id: 132,
        username: "AmateurDeBonneChere",
        content: "Pâte trop fine, elle s'est cassée au démoulage.",
        note: 3,
        createdAt: new Date("2025-06-14T15:00:00Z"),
        recipeId: 302,
    },
    {
        id: 133,
        username: "SpatuleEnSucre",
        content: "Mon tiramisu était parfait, il a fait l'unanimité !",
        note: 5,
        createdAt: new Date("2025-06-15T19:00:00Z"),
        recipeId: 301,
    },
    {
        id: 134,
        username: "CasseroleMagique",
        content: "Les biscuits étaient trop imbibés de café, c'était pâteux.",
        note: 2,
        createdAt: new Date("2025-06-16T18:00:00Z"),
        recipeId: 301,
    },
    {
        id: 135,
        username: "ElodieCooks",
        content: "La quiche était dorée et bien gonflée. Très satisfaite.",
        note: 5,
        createdAt: new Date("2025-06-17T20:00:00Z"),
        recipeId: 208,
    },
    {
        id: 136,
        username: "MarcEnCuisine",
        content: "Un peu fade, j'ajouterai de la muscade la prochaine fois.",
        note: 3,
        createdAt: new Date("2025-06-18T21:00:00Z"),
        recipeId: 208,
    },
    {
        id: 137,
        username: "PastryFan",
        content: "La sauce du magret était une belle découverte.",
        note: 4,
        createdAt: new Date("2025-06-19T19:00:00Z"),
        recipeId: 207,
    },
    {
        id: 138,
        username: "AmateurDeBonneChere",
        content: "J'ai eu la main lourde sur le miel, c'était écoeurant.",
        note: 2,
        createdAt: new Date("2025-06-20T18:00:00Z"),
        recipeId: 207,
    },
    {
        id: 139,
        username: "SpatuleEnSucre",
        content: "Un risotto crémeux et parfumé. J'ai utilisé des cèpes, c'était encore meilleur.",
        note: 5,
        createdAt: new Date("2025-06-21T19:00:00Z"),
        recipeId: 206,
    },
    {
        id: 140,
        username: "CasseroleMagique",
        content: "Plat très bourratif.",
        note: 3,
        createdAt: new Date("2025-06-22T18:00:00Z"),
        recipeId: 206,
    },
    {
        id: 141,
        username: "ElodieCooks",
        content: "Le curry de poulet est devenu un classique à la maison.",
        note: 5,
        createdAt: new Date("2025-06-23T20:00:00Z"),
        recipeId: 205,
    },
    {
        id: 142,
        username: "MarcEnCuisine",
        content: "Le poulet était un peu dur. Peut-être le faire mariner avant ?",
        note: 3,
        createdAt: new Date("2025-06-24T21:00:00Z"),
        recipeId: 205,
    },
    {
        id: 143,
        username: "PastryFan",
        content: "Le hachis était gratiné à la perfection.",
        note: 5,
        createdAt: new Date("2025-06-25T19:00:00Z"),
        recipeId: 204,
    },
    {
        id: 144,
        username: "AmateurDeBonneChere",
        content: "La purée était trop liquide.",
        note: 2,
        createdAt: new Date("2025-06-26T18:00:00Z"),
        recipeId: 204,
    },
    {
        id: 145,
        username: "SpatuleEnSucre",
        content: "Les lasagnes étaient divines, la sauce bolognaise avait bien mijoté.",
        note: 5,
        createdAt: new Date("2025-06-27T19:00:00Z"),
        recipeId: 203,
    },
    {
        id: 146,
        username: "CasseroleMagique",
        content: "Il y avait trop de béchamel par rapport à la bolognaise.",
        note: 3,
        createdAt: new Date("2025-06-28T18:00:00Z"),
        recipeId: 203,
    },
    {
        id: 147,
        username: "ElodieCooks",
        content: "Poulet rôti parfait pour le déjeuner dominical.",
        note: 4,
        createdAt: new Date("2025-06-29T13:00:00Z"),
        recipeId: 202,
    },
    {
        id: 148,
        username: "MarcEnCuisine",
        content: "Ma peau de poulet n'était pas croustillante.",
        note: 3,
        createdAt: new Date("2025-06-30T20:00:00Z"),
        recipeId: 202,
    },
    {
        id: 149,
        username: "PastryFan",
        content: "Les pâtes carbonara étaient trop sèches.",
        note: 2,
        createdAt: new Date("2025-07-01T19:00:00Z"),
        recipeId: 201,
    },
    {
        id: 150,
        username: "AmateurDeBonneChere",
        content: "Crémeux et savoureux, la recette est parfaite.",
        note: 5,
        createdAt: new Date("2025-07-02T18:00:00Z"),
        recipeId: 201,
    },
    {
        id: 151,
        username: "SpatuleEnSucre",
        content: "Le Tzatziki est bien meilleur fait maison. Merci !",
        note: 5,
        createdAt: new Date("2025-07-03T17:00:00Z"),
        recipeId: 106,
    },
    {
        id: 152,
        username: "CasseroleMagique",
        content: "Il faut vraiment bien laisser dégorger le concombre, sinon c'est la noyade.",
        note: 3,
        createdAt: new Date("2025-07-04T16:00:00Z"),
        recipeId: 106,
    },
    {
        id: 153,
        username: "ElodieCooks",
        content: "Ma salade de chèvre chaud était un succès !",
        note: 5,
        createdAt: new Date("2025-07-05T20:00:00Z"),
        recipeId: 105,
    },
    {
        id: 154,
        username: "MarcEnCuisine",
        content: "J'ai brûlé les toasts. La prochaine fois, je surveillerai mieux.",
        note: 2,
        createdAt: new Date("2025-07-06T21:00:00Z"),
        recipeId: 105,
    },
    {
        id: 155,
        username: "PastryFan",
        content: "Velouté de potimarron onctueux et parfumé. J'adore.",
        note: 5,
        createdAt: new Date("2025-07-07T19:00:00Z"),
        recipeId: 104,
    },
    {
        id: 156,
        username: "AmateurDeBonneChere",
        content: "La soupe était trop épaisse, j'ai dû rajouter beaucoup d'eau.",
        note: 3,
        createdAt: new Date("2025-07-08T18:00:00Z"),
        recipeId: 104,
    },
    {
        id: 157,
        username: "SpatuleEnSucre",
        content: "Le gaspacho était une explosion de saveurs fraîches.",
        note: 5,
        createdAt: new Date("2025-07-09T17:00:00Z"),
        recipeId: 103,
    },
    {
        id: 158,
        username: "CasseroleMagique",
        content: "Trop de concombre dans mon gaspacho, ça a pris le dessus.",
        note: 3,
        createdAt: new Date("2025-07-10T16:00:00Z"),
        recipeId: 103,
    },
    {
        id: 159,
        username: "ElodieCooks",
        content: "La salade grecque, un incontournable de l'été. Celle-ci est parfaite.",
        note: 5,
        createdAt: new Date("2025-07-11T20:00:00Z"),
        recipeId: 102,
    },
    {
        id: 160,
        username: "MarcEnCuisine",
        content: "Je n'avais pas d'oignon rouge, j'ai mis un oignon jaune, c'était moins bon.",
        note: 3,
        createdAt: new Date("2025-07-12T21:00:00Z"),
        recipeId: 102,
    },
    {
        id: 161,
        username: "PastryFan",
        content: "Les bruschettas sont parties en 5 minutes à l'apéro !",
        note: 5,
        createdAt: new Date("2025-07-13T19:00:00Z"),
        recipeId: 101,
    },
    {
        id: 162,
        username: "AmateurDeBonneChere",
        content: "Les tomates n'avaient pas beaucoup de goût, ça dépend vraiment de la saison.",
        note: 3,
        createdAt: new Date("2025-07-14T18:00:00Z"),
        recipeId: 101,
    },
    {
        id: 163,
        username: "JulieCuisine",
        content: "Recette de lasagnes adoptée ! Un peu longue mais ça vaut le coup.",
        note: 5,
        createdAt: new Date("2025-08-01T19:00:00Z"),
        recipeId: 203,
    },
    {
        id: 164,
        username: "AlexLeCuistot",
        content: "Le hachis parmentier manquait de sel. Pensez à goûter !",
        note: 3,
        createdAt: new Date("2025-08-01T19:05:00Z"),
        recipeId: 204,
    },
    {
        id: 165,
        username: "CuisineAddict",
        content: "Ce curry de poulet est une invitation au voyage !",
        note: 5,
        createdAt: new Date("2025-08-01T19:10:00Z"),
        recipeId: 205,
    },
    {
        id: 166,
        username: "P'titChef",
        content: "J'ai raté mon risotto, le riz était pâteux. Je retenterai.",
        note: 2,
        createdAt: new Date("2025-08-01T19:15:00Z"),
        recipeId: 206,
    },
    {
        id: 167,
        username: "JulieCuisine",
        content: "Cuisson du magret de canard un peu stressante, mais les instructions sont claires.",
        note: 4,
        createdAt: new Date("2025-08-01T19:20:00Z"),
        recipeId: 207,
    },
    {
        id: 168,
        username: "AlexLeCuistot",
        content: "La quiche lorraine était un peu sèche.",
        note: 3,
        createdAt: new Date("2025-08-01T19:25:00Z"),
        recipeId: 208,
    },
    {
        id: 169,
        username: "CuisineAddict",
        content: "Le Tiramisu était trop bon, j'en ai repris 3 fois !",
        note: 5,
        createdAt: new Date("2025-08-01T19:30:00Z"),
        recipeId: 301,
    },
    {
        id: 170,
        username: "P'titChef",
        content: "La tarte aux pommes a brûlé sur les bords.",
        note: 2,
        createdAt: new Date("2025-08-01T19:35:00Z"),
        recipeId: 302,
    },
    {
        id: 171,
        username: "JulieCuisine",
        content: "Mousse au chocolat trop sucrée à mon goût.",
        note: 3,
        createdAt: new Date("2025-08-01T19:40:00Z"),
        recipeId: 303,
    },
    {
        id: 172,
        username: "AlexLeCuistot",
        content: "La crème brûlée, un de mes desserts préférés. Recette validée.",
        note: 5,
        createdAt: new Date("2025-08-01T19:45:00Z"),
        recipeId: 304,
    },
    {
        id: 173,
        username: "CuisineAddict",
        content: "J'ai fait le gâteau au yaourt avec mes enfants, ils ont adoré !",
        note: 5,
        createdAt: new Date("2025-08-01T19:50:00Z"),
        recipeId: 305,
    },
    {
        id: 174,
        username: "P'titChef",
        content: "La panna cotta manquait de fermeté.",
        note: 3,
        createdAt: new Date("2025-08-01T19:55:00Z"),
        recipeId: 306,
    },
    {
        id: 175,
        username: "JulieCuisine",
        content: "Le coeur de mon fondant était coulant comme jamais !",
        note: 5,
        createdAt: new Date("2025-08-01T20:00:00Z"),
        recipeId: 307,
    },
    {
        id: 176,
        username: "AlexLeCuistot",
        content: "Tarte au citron trop acide pour moi.",
        note: 2,
        createdAt: new Date("2025-08-01T20:05:00Z"),
        recipeId: 308,
    },
    {
        id: 177,
        username: "CuisineAddict",
        content: "Le tzatziki est parfait pour l'apéro.",
        note: 4,
        createdAt: new Date("2025-08-02T18:00:00Z"),
        recipeId: 106,
    },
    {
        id: 178,
        username: "P'titChef",
        content: "La salade de chèvre chaud, une valeur sûre.",
        note: 5,
        createdAt: new Date("2025-08-02T18:05:00Z"),
        recipeId: 105,
    },
    {
        id: 179,
        username: "JulieCuisine",
        content: "Le velouté de potimarron est un délice, j'y ai ajouté quelques noisettes grillées.",
        note: 5,
        createdAt: new Date("2025-08-02T18:10:00Z"),
        recipeId: 104,
    },
    {
        id: 180,
        username: "AlexLeCuistot",
        content: "Gaspacho correct, mais il manquait de sel.",
        note: 3,
        createdAt: new Date("2025-08-02T18:15:00Z"),
        recipeId: 103,
    },
    {
        id: 181,
        username: "CuisineAddict",
        content: "La salade grecque est meilleure avec une bonne huile d'olive.",
        note: 4,
        createdAt: new Date("2025-08-02T18:20:00Z"),
        recipeId: 102,
    },
    {
        id: 182,
        username: "P'titChef",
        content: "J'ai mis de l'ail en poudre dans mes bruschettas, c'était plus simple.",
        note: 4,
        createdAt: new Date("2025-08-02T18:25:00Z"),
        recipeId: 101,
    },
    {
        id: 183,
        username: "JulieCuisine",
        content: "Les vraies carbonara, un délice ! Ne mettez jamais de crème !",
        note: 5,
        createdAt: new Date("2025-08-02T18:30:00Z"),
        recipeId: 201,
    },
    {
        id: 184,
        username: "AlexLeCuistot",
        content: "Le poulet rôti était un peu fade.",
        note: 3,
        createdAt: new Date("2025-08-02T18:35:00Z"),
        recipeId: 202,
    },
    {
        id: 185,
        username: "ChefEnHerbe",
        content: "Les lasagnes étaient sèches, il faut plus de sauce.",
        note: 2,
        createdAt: new Date("2025-08-03T19:00:00Z"),
        recipeId: 203,
    },
    {
        id: 186,
        username: "Gourmand75",
        content: "Le hachis de mon enfance. Parfait !",
        note: 5,
        createdAt: new Date("2025-08-03T19:05:00Z"),
        recipeId: 204,
    },
    {
        id: 187,
        username: "LeCritiqueGastro",
        content: "Le curry de poulet manquait d'épices.",
        note: 3,
        createdAt: new Date("2025-08-03T19:10:00Z"),
        recipeId: 205,
    },
    {
        id: 188,
        username: "MiamMiam",
        content: "Mon risotto aux champignons était une catastrophe.",
        note: 1,
        createdAt: new Date("2025-08-03T19:15:00Z"),
        recipeId: 206,
    },
    {
        id: 189,
        username: "FoodieParis",
        content: "Le magret de canard était trop cuit.",
        note: 2,
        createdAt: new Date("2025-08-03T19:20:00Z"),
        recipeId: 207,
    },
    {
        id: 190,
        username: "SimpleEtBon",
        content: "La quiche lorraine était excellente, je la referai.",
        note: 5,
        createdAt: new Date("2025-08-03T19:25:00Z"),
        recipeId: 208,
    },
    {
        id: 191,
        username: "PapaCuisine",
        content: "Mon tiramisu s'est effondré.",
        note: 1,
        createdAt: new Date("2025-08-03T19:30:00Z"),
        recipeId: 301,
    },
    {
        id: 192,
        username: "SophieGourmande",
        content: "La tarte aux pommes est un classique, mais cette recette est top.",
        note: 4,
        createdAt: new Date("2025-08-03T19:35:00Z"),
        recipeId: 302,
    },
    {
        id: 193,
        username: "EpicurienDu21",
        content: "La mousse au chocolat était divine.",
        note: 5,
        createdAt: new Date("2025-08-03T19:40:00Z"),
        recipeId: 303,
    },
    {
        id: 194,
        username: "MamaGato",
        content: "La crème brûlée n'a pas pris.",
        note: 2,
        createdAt: new Date("2025-08-03T19:45:00Z"),
        recipeId: 304,
    },
    {
        id: 195,
        username: "LudoCuisine",
        content: "J'ai mis des fruits dans mon gâteau au yaourt, un régal.",
        note: 5,
        createdAt: new Date("2025-08-03T19:50:00Z"),
        recipeId: 305,
    },
    {
        id: 196,
        username: "RecetteTesteur",
        content: "La panna cotta était trop gélatineuse.",
        note: 2,
        createdAt: new Date("2025-08-03T19:55:00Z"),
        recipeId: 306,
    },
    {
        id: 197,
        username: "ChefEnHerbe",
        content: "Le fondant au chocolat était trop bon !",
        note: 5,
        createdAt: new Date("2025-08-03T20:00:00Z"),
        recipeId: 307,
    },
    {
        id: 198,
        username: "Gourmand75",
        content: "Je n'ai pas réussi la meringue de la tarte au citron.",
        note: 2,
        createdAt: new Date("2025-08-03T20:05:00Z"),
        recipeId: 308,
    },
    {
        id: 199,
        username: "LeCritiqueGastro",
        content: "Le tzatziki était trop salé.",
        note: 2,
        createdAt: new Date("2025-08-04T18:00:00Z"),
        recipeId: 106,
    },
    {
        id: 200,
        username: "MiamMiam",
        content: "Salade de chèvre chaud : mon entrée préférée !",
        note: 5,
        createdAt: new Date("2025-08-04T18:05:00Z"),
        recipeId: 105,
    },
    {
        id: 201,
        username: "FoodieParis",
        content: "Ce velouté est une belle surprise.",
        note: 4,
        createdAt: new Date("2025-08-04T18:10:00Z"),
        recipeId: 104,
    },
    {
        id: 202,
        username: "SimpleEtBon",
        content: "Mon gaspacho manquait de piment.",
        note: 3,
        createdAt: new Date("2025-08-04T18:15:00Z"),
        recipeId: 103,
    },
    {
        id: 203,
        username: "PapaCuisine",
        content: "Salade grecque, simple et efficace.",
        note: 4,
        createdAt: new Date("2025-08-04T18:20:00Z"),
        recipeId: 102,
    },
    {
        id: 204,
        username: "SophieGourmande",
        content: "Les bruschettas étaient parfaites pour commencer le repas.",
        note: 5,
        createdAt: new Date("2025-08-04T18:25:00Z"),
        recipeId: 101,
    },
];

class RecipesController extends Controller {
    readCategory() {
        const id = parseInt(this.request.params.categoryId);
        const selectedCategory = categories.find((category) => category.id === id);
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
    calculateAverageNoteForAll(categoryRecipes) {
        const averageNotesArray = categoryRecipes.map((recipe) => {
            const comments = recipeComments.filter((comment) => comment.note && comment.recipeId === recipe.id);
            if (comments.length === 0)
                return 0;
            const total = comments.reduce((sum, comment) => { var _a; return sum + ((_a = comment.note) !== null && _a !== void 0 ? _a : 0); }, 0);
            return Math.round((total / comments.length) * 10) / 10;
        });
        return averageNotesArray;
    }
    readRecipe() {
        const id = parseInt(this.request.params.id);
        const requestedRecipe = recipes.find((recipe) => {
            return recipe.id === id;
        });
        if (requestedRecipe === undefined) {
            this.response.status(404).render("errors/404", {
                title: "Recette introuvable",
                description: "La recette recherchée n'existe pas.",
            });
            return;
        }
        const requestedRecipeIngredientDetails = recipeIngredients.filter((ingredient) => {
            return ingredient.recipeId == id;
        });
        const requestedRecipeIngredientList = requestedRecipeIngredientDetails
            .map((detail) => ingredients.find((currentIngredient) => currentIngredient.id === detail.ingredientId))
            .filter((ingredient) => !!ingredient);
        const requestedRecipeInsdtructions = recipeInstructions.filter((instruction) => instruction.recipeId === id);
        const requestedRecipeComments = recipeComments.filter((comment) => comment.recipeId == id);
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
            id: recipeComments.length + 1,
            username: this.request.body.user,
            content: this.request.body.message,
            note: this.request.body.note,
            createdAt: new Date(),
            recipeId: this.request.body.id,
        };
        recipeComments.push(comment);
        this.response.status(200).json(comment);
    }
    browseRecipeByName() {
        const input = this.request.params.recipeName;
        const splittedInput = decodeURIComponent(input).split(" ");
        const validRecipes = recipes
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

class GeneralController extends Controller {
    homePage() {
        this.response.render("pages/home", { categoryList: categories });
    }
}

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
    console.log(`Comment for recipe with id ${request.body.id} added by ${request.body.user}. 
    Note : ${request.body.note}. Commentaire : ${request.body.message}`);
    new RecipesController(request, response).addComment();
});
router.get("/recipes/byName/:recipeName", (request, response) => {
    console.log(`Page de la recette ${request.params.recipeName} requested by a user`);
    new RecipesController(request, response).browseRecipeByName();
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
//# sourceMappingURL=app.js.map
