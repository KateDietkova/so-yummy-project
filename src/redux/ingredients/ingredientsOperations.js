import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllIngredientsAPI } from '../../servicesApi/api';

export const getAllIngredients = createAsyncThunk(
  'ingredients/list',
  async (_, thunkAPI) => {
    try {
      const {data} = await getAllIngredientsAPI();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);