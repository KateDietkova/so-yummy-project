import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api-jvk2.onrender.com/api';

export const fetchCategoriesList = createAsyncThunk(
  'categories/fetchCategoriesList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/recipes/category-list');
      return data.categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchRecipesByCategory = createAsyncThunk(
  'categories/fetchRecipesByCategory',
  async ({ categoryName, page }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/recipes/category/${categoryName}?page=${page}`
      );
      return data.data.recipes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
