import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://so-yummy-api.herokuapp.com/api/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQxNzMyNjExZTYzNDI2NDViOTdkYzciLCJpYXQiOjE2ODIwMTEzMjksImV4cCI6MTY4MzIyMDkyOX0.NG3IycpiIYNqIhve3rB_8UHsAOx1yOSSuUoiY_XOJuk',
  },
});

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com';

export const fetchPopularRecipe = createAsyncThunk(
  'recipes/fetchPopular',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/popular-recipe');
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllByCategory = createAsyncThunk(
  'recipes/fetchAllByCategory',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/recipes/main-page');
      return data.recipes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
