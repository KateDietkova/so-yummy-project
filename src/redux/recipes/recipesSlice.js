import { createSlice } from '@reduxjs/toolkit';
import { getAllByCategory } from './recipesOperations';

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
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
