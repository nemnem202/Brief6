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

export type User = {
  userName: string;
  password: string;
  comments: RecipeComment[];
};
