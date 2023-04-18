import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularRecipes: null,
  recipesByCategory: null,
  favoritesRecipes: null,
  userRecipes: null,
  recipesByTitle: null,
  recipesBuIngredients: null,
  isLoading: false,
  error: null,
};
export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: {},
});

export const recipesReducer = recipesSlice.reducer;
