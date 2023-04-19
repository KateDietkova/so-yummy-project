export const selectCategories = state => state.categories;

export const selectRecipesByCategory = state =>
  state.categories.recipesByCategory;
