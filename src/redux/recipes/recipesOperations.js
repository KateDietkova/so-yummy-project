import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';

export const getAllByCategory = createAsyncThunk(
  'recipes/fetchAllByCategory',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/recipes/main-page');
      return data.recipes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
