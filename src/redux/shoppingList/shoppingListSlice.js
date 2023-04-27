import { createSlice } from '@reduxjs/toolkit';
import {
  getShoppingList,
  deleteFromShoppingList,
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
        state.shoppingList = state.shoppingList.filter(
          ({ _id }) => _id !== action.payload._id
        );
        // const id = state.shoppingList.findIndex(
        //   ({ _id }) => _id === action.payload
        // );
        // state.shoppingList.splice(id, 1);
        console.log(action.payload);
      })
      .addCase(deleteFromShoppingList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;