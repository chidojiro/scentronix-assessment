import { MOCK_RECIPES } from '@/mocks/recipes';

export const getRecipeList = async () => MOCK_RECIPES;

export const getRecipe = async (id: string) => MOCK_RECIPES.find((recipe) => recipe.id === id);
