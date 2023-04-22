import { createSlice } from '@reduxjs/toolkit';
import { fetchPopularRecipe } from './recipesOperations';

const initialState = {
  popularRecipes: null,
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

  extraReducers: {
    [fetchPopularRecipe.pending](state, action) {
      state.isLoading = true;
    },
    [fetchPopularRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.popularRecipes = action.payload;
    },
    [fetchPopularRecipe.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
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
