import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from './ingredientsOperations';

const initialState = {
  ingredients: null,
  shoppingList: null,
  isLoading: false,
  error: null,
};
export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: {
    [fetchIngredients.fulfilled]:   (state, action) =>{
      return{
        ...state,
        ingredients: action.payload
      }
    }
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
