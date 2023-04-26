import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';

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
  async (categoryName, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/recipes/category/${categoryName}`);
      return data.data.recipes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
