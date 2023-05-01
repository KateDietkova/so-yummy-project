import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRecipesByCategory,
  fetchCategoriesList,
} from './categoriesOperations';

const initialState = {
  categories: [],
  recipesByCategory: [],
  isLoading: false,
  error: null,
};
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipesByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipesByCategory = action.payload.data;
      })
      .addCase(fetchRecipesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategoriesList.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
