export const selectCategories = state => state.categories;

export const selectRecipesByCategory = state =>
  state.categories.recipesByCategory;

export const selectCategoriesIsLoading = state => state.categories.isLoading;
export const selectCategoriesRecipesError = state => state.categories.error;
