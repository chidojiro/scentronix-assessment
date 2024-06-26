type RecipeGroup = {
  label: string;
};

export type Recipe = {
  id: string;
  label: string;
  groups: RecipeGroup[];
  description: string;
  prepTime: number[];
  bakingTime: number[];
  totalTime: number[];
  yield: string;
  image: string;
};
