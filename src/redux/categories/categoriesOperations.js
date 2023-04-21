import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from 'servicesApi/api';

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';

export const fetchCategoriesList = createAsyncThunk(
  'categories/fetchCategoriesList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/recipes/category-list');
      console.log(data.categories);
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
      const { data } = await instance.get(`/recipes/category/${categoryName}`);
      return data.data.recipes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
