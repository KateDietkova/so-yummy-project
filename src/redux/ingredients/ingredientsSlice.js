import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ingredients: null,
  shoppingList: null,
  isLoading: false,
  error: null,
};
export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: {},
});

export const ingredientsReducer = ingredientsSlice.reducer;
