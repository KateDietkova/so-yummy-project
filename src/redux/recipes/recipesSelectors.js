export const selectPopularRecipes = state => state.recipes.popularRecipes;
export const selectRecipesByCategory = state => state.recipes.recipesByCategory;
export const selectFavoritesRecipes = state => state.recipes.favoritesRecipes;
export const selectUserRecipes = state => state.recipes.userRecipes;
export const selectRecipesByTitle = state => state.recipes.recipesByTitle;
export const selectRecipesByIngredients = state =>
  state.recipes.recipesBuIngredients;

export const selectIsLoading = state => state.recipes.isLoggedIn;
export const selectRecipesError = state => state.recipes.error;
