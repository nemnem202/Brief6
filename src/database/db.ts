export type Ingredient = {
  id: number;
  name: string;
};

export type RecipeIngredient = {
  id: number;
  quantity: number;
  unit: string;
  ingredientId: number;
  recipeId: number;
};

export type RecipeInstruction = {
  id: number;
  step: number;
  description: string;
  recipeId: number;
};

export type Recipe = {
  id: number;
  title: string;
  description: string;
};

export type RecipeComment = {
  id: number;
  username: string;
  content: string;
  note: number | undefined;
  createdAt: Date;
  recipeId: number;
};

export type Category = {
  id: number;
  name: string;
  description: string;
};

export const categories: Category[] = [
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
    description:
      "Des desserts sucrés pour terminer le repas sur une note agréable.",
  },
];

export const ingredients: Ingredient[] = [
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
];

export const recipeIngredients: RecipeIngredient[] = [
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
];

export const recipeInstructions: RecipeInstruction[] = [
  // Bruschetta (101)
  { id: 1, step: 1, description: "Coupez les tomates en dés, ciselez le basilic et mélangez.", recipeId: 101 },
  { id: 2, step: 2, description: "Faites griller les tranches de pain et frottez-les avec la gousse d'ail.", recipeId: 101 },
  { id: 3, step: 3, description: "Garnissez le pain avec la préparation aux tomates et arrosez d'un filet d'huile d'olive.", recipeId: 101 },
  // Salade Grecque (102)
  { id: 4, step: 1, description: "Coupez le concombre, les tomates et l'oignon en morceaux.", recipeId: 102 },
  { id: 5, step: 2, description: "Ajoutez la feta en dés et les olives.", recipeId: 102 },
  { id: 6, step: 3, description: "Assaisonnez avec l'huile d'olive, du sel et du poivre.", recipeId: 102 },
  // Gaspacho (103)
  { id: 7, step: 1, description: "Lavez et coupez tous les légumes en morceaux.", recipeId: 103 },
  { id: 8, step: 2, description: "Mixez tous les ingrédients ensemble jusqu'à obtenir une texture lisse.", recipeId: 103 },
  { id: 9, step: 3, description: "Placez au réfrigérateur pendant au moins 2 heures avant de servir.", recipeId: 103 },
  // Velouté de Potimarron (104)
  { id: 10, step: 1, description: "Faites revenir l'oignon et l'ail émincés dans une casserole avec de l'huile.", recipeId: 104 },
  { id: 11, step: 2, description: "Ajoutez le potimarron en morceaux, couvrez d'eau et laissez cuire 20 minutes.", recipeId: 104 },
  { id: 12, step: 3, description: "Mixez la soupe jusqu'à obtenir un velouté onctueux. Assaisonnez.", recipeId: 104 },
  // Salade de Chèvre Chaud (105)
  { id: 13, step: 1, description: "Préparez la salade verte avec une vinaigrette.", recipeId: 105 },
  { id: 14, step: 2, description: "Faites griller les tranches de pain avec le fromage de chèvre dessus.", recipeId: 105 },
  { id: 15, step: 3, description: "Déposez les toasts chauds sur la salade et servez immédiatement.", recipeId: 105 },
  // Tzatziki (106)
  { id: 16, step: 1, description: "Râpez le concombre et laissez-le dégorger avec un peu de sel.", recipeId: 106 },
  { id: 17, step: 2, description: "Mélangez le yaourt avec l'ail haché, l'huile d'olive et le concombre bien essoré.", recipeId: 106 },
  { id: 18, step: 3, description: "Réservez au frais avant de servir.", recipeId: 106 },
  // Pâtes Carbonara (201)
  { id: 19, step: 1, description: "Faites cuire les pâtes. Pendant ce temps, faites dorer la pancetta.", recipeId: 201 },
  { id: 20, step: 2, description: "Mélangez les jaunes d'œufs avec le parmesan et le poivre.", recipeId: 201 },
  { id: 21, step: 3, description: "Hors du feu, mélangez les pâtes égouttées avec la pancetta et la sauce aux œufs.", recipeId: 201 },
  // Poulet Rôti (202)
  { id: 22, step: 1, description: "Préchauffez le four à 200°C. Massez le poulet avec le beurre, l'ail et les herbes.", recipeId: 202 },
  { id: 23, step: 2, description: "Enfournez pour 1h15, en arrosant régulièrement le poulet avec son jus.", recipeId: 202 },
  { id: 24, step: 3, description: "Laissez reposer 10 minutes avant de découper.", recipeId: 202 },
  // Lasagnes (203)
  { id: 25, step: 1, description: "Préparez la sauce bolognaise et la béchamel.", recipeId: 203 },
  { id: 26, step: 2, description: "Montez les lasagnes en alternant les couches : pâtes, bolognaise, béchamel, parmesan.", recipeId: 203 },
  { id: 27, step: 3, description: "Terminez par une couche de béchamel et de parmesan, puis enfournez 30 minutes à 180°C.", recipeId: 203 },
  // Hachis Parmentier (204)
  { id: 28, step: 1, description: "Préparez une purée de pommes de terre maison.", recipeId: 204 },
  { id: 29, step: 2, description: "Faites revenir la viande hachée avec l'oignon.", recipeId: 204 },
  { id: 30, step: 3, description: "Dans un plat, étalez la viande puis recouvrez avec la purée. Gratinez au four.", recipeId: 204 },
  // Curry de Poulet (205)
  { id: 31, step: 1, description: "Faites dorer le poulet en morceaux avec l'oignon et l'ail.", recipeId: 205 },
  { id: 32, step: 2, description: "Ajoutez le lait de coco et laissez mijoter 15 minutes.", recipeId: 205 },
  { id: 33, step: 3, description: "Servez chaud avec du riz basmati.", recipeId: 205 },
  // Risotto (206)
  { id: 34, step: 1, description: "Faites revenir l'oignon, ajoutez le riz et le faire nacrer.", recipeId: 206 },
  { id: 35, step: 2, description: "Ajoutez du bouillon louche par louche jusqu'à cuisson complète du riz.", recipeId: 206 },
  { id: 36, step: 3, description: "Incorporez les champignons poêlés, le parmesan et le beurre. Mélangez bien.", recipeId: 206 },
  // Magret (207)
  { id: 37, step: 1, description: "Quadrillez la peau du magret et faites-le cuire côté peau dans une poêle chaude.", recipeId: 207 },
  { id: 38, step: 2, description: "Videz la graisse, déglacez avec du vinaigre balsamique et ajoutez le miel.", recipeId: 207 },
  { id: 39, step: 3, description: "Nappez le magret de sauce et servez.", recipeId: 207 },
  // Quiche Lorraine (208)
  { id: 40, step: 1, description: "Foncez un moule avec la pâte. Répartissez les lardons préalablement dorés.", recipeId: 208 },
  { id: 41, step: 2, description: "Mélangez les œufs et la crème. Versez sur les lardons.", recipeId: 208 },
  { id: 42, step: 3, description: "Enfournez 40 minutes à 180°C.", recipeId: 208 },
  // Tiramisu (301)
  { id: 43, step: 1, description: "Mélangez les jaunes d'œufs et le sucre. Ajoutez le mascarpone.", recipeId: 301 },
  { id: 44, step: 2, description: "Montez les blancs en neige et incorporez-les. Trempez les biscuits dans le café.", recipeId: 301 },
  { id: 45, step: 3, description: "Alternez couches de biscuits et de crème. Saupoudrez de cacao.", recipeId: 301 },
  // Tarte aux Pommes (302)
  { id: 46, step: 1, description: "Foncez un moule avec la pâte. Disposez les lamelles de pommes.", recipeId: 302 },
  { id: 47, step: 2, description: "Saupoudrez de sucre et de cannelle, ajoutez des noix de beurre.", recipeId: 302 },
  { id: 48, step: 3, description: "Cuire 30 minutes à 180°C.", recipeId: 302 },
  // Mousse au Chocolat (303)
  { id: 49, step: 1, description: "Faites fondre le chocolat. Séparez les blancs des jaunes d'œufs.", recipeId: 303 },
  { id: 50, step: 2, description: "Incorporez les jaunes au chocolat. Montez les blancs en neige avec le sucre.", recipeId: 303 },
  { id: 51, step: 3, description: "Mélangez délicatement les deux préparations. Réfrigérez 4 heures.", recipeId: 303 },
  // Crème Brûlée (304)
  { id: 52, step: 1, description: "Mélangez les jaunes et le sucre. Incorporez la crème liquide chaude.", recipeId: 304 },
  { id: 53, step: 2, description: "Versez dans des ramequins et cuire 1h au bain-marie à 100°C.", recipeId: 304 },
  { id: 54, step: 3, description: "Laissez refroidir, puis saupoudrez de cassonade et caramélisez au chalumeau.", recipeId: 304 },
  // Gâteau au Yaourt (305)
  { id: 55, step: 1, description: "Mélangez tous les ingrédients dans l'ordre : yaourt, sucre, œufs, farine, levure, huile.", recipeId: 305 },
  { id: 56, step: 2, description: "Versez dans un moule beurré et fariné.", recipeId: 305 },
  { id: 57, step: 3, description: "Cuire 30 minutes à 180°C.", recipeId: 305 },
  // Panna Cotta (306)
  { id: 58, step: 1, description: "Faites chauffer la crème avec le sucre.", recipeId: 306 },
  { id: 59, step: 2, description: "Hors du feu, ajoutez la gélatine ramollie. Versez dans des verrines.", recipeId: 306 },
  { id: 60, step: 3, description: "Laissez prendre au frais 4 heures. Servez avec un coulis de fruits rouges.", recipeId: 306 },
  // Fondant (307)
  { id: 61, step: 1, description: "Faites fondre le chocolat et le beurre.", recipeId: 307 },
  { id: 62, step: 2, description: "Ajoutez le sucre, les œufs et la farine.", recipeId: 307 },
  { id: 63, step: 3, description: "Versez dans des moules et cuire 12 minutes à 210°C.", recipeId: 307 },
  // Tarte au Citron (308)
  { id: 64, step: 1, description: "Préparez la crème au citron et garnissez le fond de tarte précuit.", recipeId: 308 },
  { id: 65, step: 2, description: "Préparez la meringue italienne en montant les blancs avec un sirop de sucre.", recipeId: 308 },
  { id: 66, step: 3, description: "Pochez la meringue sur la tarte et dorez-la au chalumeau.", recipeId: 308 },
];

export const recipes: Recipe[] = [
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

export const recipeComments: RecipeComment[] = [
  { id: 1, username: "Alice", content: "Délicieux et facile à préparer !", note: 5, createdAt: new Date("2025-07-27T12:43:10Z"), recipeId: 101 },
  { id: 2, username: "Bob", content: "J'adore les bruschettas, mais j'aurais aimé plus de basilic.", note: 4, createdAt: new Date("2025-07-28T14:00:15Z"), recipeId: 101 },
  { id: 3, username: "Charlie", content: "Rafraîchissant et parfait pour l'été !", note: 5, createdAt: new Date("2025-07-28T16:21:10Z"), recipeId: 102 },
  { id: 4, username: "David", content: "Très bon, mais un peu trop salé à mon goût.", note: 4, createdAt: new Date("2025-07-29T18:30:00Z"), recipeId: 201 },
  { id: 5, username: "Eve", content: "Parfait pour un dîner en famille !", note: 5, createdAt: new Date("2025-07-29T19:00:50Z"), recipeId: 202 },
  { id: 6, username: "Frank", content: "Le poulet était un peu sec.", note: 3, createdAt: new Date("2025-07-30T20:05:30Z"), recipeId: 202 },
  { id: 7, username: "Grace", content: "Un dessert italien classique, tout simplement délicieux !", note: 5, createdAt: new Date("2025-07-28T21:10:00Z"), recipeId: 301 },
  { id: 8, username: "Hank", content: "La tarte était délicieuse, mais j'aurais aimé plus de cannelle.", note: 4, createdAt: new Date("2025-07-29T15:45:12Z"), recipeId: 302 },
  { id: 9, username: "Leo", content: "Incroyable ce gaspacho, super recette !", note: 5, createdAt: new Date("2025-07-29T12:00:00Z"), recipeId: 103 },
  { id: 10, username: "Zoe", content: "Très bon velouté, j'ai ajouté des châtaignes.", note: 5, createdAt: new Date("2025-07-30T19:30:00Z"), recipeId: 104 },
  { id: 11, username: "Tom", content: "La meilleure salade de chèvre chaud.", note: 5, createdAt: new Date("2025-07-28T13:00:00Z"), recipeId: 105 },
  { id: 12, username: "Mia", content: "Ma famille a adoré les lasagnes.", note: 5, createdAt: new Date("2025-07-29T20:15:00Z"), recipeId: 203 },
  { id: 13, username: "Noah", content: "Super curry, pas trop épicé, juste parfait.", note: 5, createdAt: new Date("2025-07-30T18:55:00Z"), recipeId: 205 },
  { id: 14, username: "Emma", content: "Le risotto était très crémeux, merci !", note: 5, createdAt: new Date("2025-07-28T20:45:00Z"), recipeId: 206 },
  { id: 15, username: "Liam", content: "La cuisson du magret était parfaite grâce à vos conseils.", note: 5, createdAt: new Date("2025-07-29T21:00:00Z"), recipeId: 207 },
  { id: 16, username: "Olivia", content: "Mousse au chocolat validée par les enfants !", note: 5, createdAt: new Date("2025-07-28T16:00:00Z"), recipeId: 303 },
  { id: 17, username: "William", content: "La crème était un peu trop liquide.", note: 3, createdAt: new Date("2025-07-30T22:00:00Z"), recipeId: 304 },
  { id: 18, username: "Sophia", content: "Le gâteau au yaourt le plus moelleux que j'ai fait.", note: 5, createdAt: new Date("2025-07-29T10:30:00Z"), recipeId: 305 },
  { id: 19, username: "James", content: "Très frais la panna cotta, une belle découverte.", note: 4, createdAt: new Date("2025-07-30T14:00:00Z"), recipeId: 306 },
  { id: 20, username: "Isabella", content: "Le fondant était incroyable, coeur coulant réussi !", note: 5, createdAt: new Date("2025-07-28T22:30:00Z"), recipeId: 307 },
  { id: 21, username: "Lucas", content: "Un peu compliqué la meringue, mais le résultat est top.", note: 4, createdAt: new Date("2025-07-29T17:00:00Z"), recipeId: 308 },
  { id: 22, username: "Bob", content: "J'ai ajouté du poivron au gaspacho, c'était top.", note: 5, createdAt: new Date("2025-07-30T11:00:00Z"), recipeId: 103 },
  { id: 23, username: "Alice", content: "La meilleure carbonara, sans crème, la vraie !", note: 5, createdAt: new Date("2025-07-30T19:10:00Z"), recipeId: 201 },
  { id: 24, username: "Charlie", content: "Tiramisu un peu trop imbibé de café à mon goût.", note: 3, createdAt: new Date("2025-07-29T09:00:00Z"), recipeId: 301 },
  { id: 25, username: "Grace", content: "Le hachis parmentier de mon enfance.", note: 5, createdAt: new Date("2025-07-30T12:30:00Z"), recipeId: 204 },
  { id: 26, username: "Frank", content: "La quiche était bonne mais la pâte un peu molle.", note: 3, createdAt: new Date("2025-07-29T13:45:00Z"), recipeId: 208 },
  { id: 27, username: "Zoe", content: "Le Tzatziki est parfait pour l'apéritif d'été.", note: 5, createdAt: new Date("2025-07-28T18:00:00Z"), recipeId: 106 },
  { id: 28, username: "David", content: "J'ai raté mon fondant, il était trop cuit.", note: 2, createdAt: new Date("2025-07-30T21:00:00Z"), recipeId: 307 },
  { id: 29, username: "Mia", content: "Les enfants ont adoré le gâteau au yaourt !", note: 5, createdAt: new Date("2025-07-30T16:30:00Z"), recipeId: 305 },
  { id: 30, username: "Leo", content: "La tarte au citron est ma nouvelle recette préférée.", note: 5, createdAt: new Date("2025-07-30T18:20:00Z"), recipeId: 308 },
];