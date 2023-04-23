import { createSlice } from '@reduxjs/toolkit';
import { getAllIngredients } from './ingredientsOperations';

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
  
};
export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllIngredients.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingredients = action.payload;
        console.log(action.payload)
      })
      .addCase(getAllIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const ingredientsReducer = ingredientsSlice.reducer;
