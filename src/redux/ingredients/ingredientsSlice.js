// import { createSlice } from '@reduxjs/toolkit';
// import { getAllIngredients } from './ingredientsOperations';

// const initialState = {
//   ingredients: null,
//   shoppingList: null,
//   isLoading: false,
//   error: null,
// };
// export const ingredientsSlice = createSlice({
//   name: 'ingredients',
//   initialState,
//   extraReducers: builder =>
//      builder
//       .addCase(getAllIngredients.fulfilled, (state, { payload }) => {
//         state.ingredients = payload;
//         state.isIngredientsFetching = false;
//       })

//       .addCase(getAllIngredients.pending)

//       .addCase(getAllIngredients.rejected)
// });

// export const ingredientsReducer = ingredientsSlice.reducer;
