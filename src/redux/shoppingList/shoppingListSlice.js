import { createSlice } from '@reduxjs/toolkit';

import {
  getShoppingList,
  deleteFromShoppingList,
  addToShoppingList,
} from './shoppingListOperations';

const initialState = {
  shoppingList: [],
  isLoading: false,
  error: null,
};
export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getShoppingList.pending, state => {
        state.isLoading = true;
      })
      .addCase(getShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.shoppingList = action.payload;
      })
      .addCase(getShoppingList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFromShoppingList.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFromShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log('deleteFromShoppingList', action.payload);
        state.shoppingList = action.payload;
      })
      .addCase(deleteFromShoppingList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addToShoppingList.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.shoppingList = action.payload;
      })
      .addCase(addToShoppingList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
