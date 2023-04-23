
import { createSlice } from '@reduxjs/toolkit';

import { fetchRecipe } from './recipesOperations';

const initialState = {
  recipe: [],
  isLoading: false,
  error: null,
};
export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipe.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipe = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

  // {
  //   [fetchPopularRecipe.pending](state, action) {
  //     state.isLoading = true;
  //   },
  //   [fetchPopularRecipe.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.popularRecipes = action.payload;
  //   },
  //   [fetchPopularRecipe.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const recipesReducer = recipesSlice.reducer;