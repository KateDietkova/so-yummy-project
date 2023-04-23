import { createSlice } from '@reduxjs/toolkit';

import {
  deleteUserRecipe,
  fetchPopularRecipe,
  fetchUserRecipes,
  getAllByCategory,
} from './recipesOperations';


const initialState = {
  popularRecipes: [],
  recipesByCategory: [],
  favoritesRecipes: null,
  userRecipes: [],
  recipesByTitle: null,
  recipesBuIngredients: null,
  isLoading: false,
  error: null,
};
export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchPopularRecipe.pending, state => {
        state.isLoading = true;
      })

      .addCase(getAllByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipesByCategory = action.payload;
      })
      .addCase(getAllByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchPopularRecipe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.popularRecipes = payload;
      })
      .addCase(fetchPopularRecipe.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUserRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUserRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.userRecipes = payload;
      })
      .addCase(fetchUserRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteUserRecipe.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUserRecipe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.userRecipes = state.userRecipes.filter(
          recipe => recipe._id !== payload._id
        );
      })
      .addCase(deleteUserRecipe.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
