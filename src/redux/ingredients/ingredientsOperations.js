import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllIngredientsAPI } from '../../servicesApi/api';

export const getAllIngredients = createAsyncThunk(
  'ingredients/list',
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllIngredientsAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
