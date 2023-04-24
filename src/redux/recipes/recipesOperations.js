import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';

export const fetchPopularRecipe = createAsyncThunk(
  'recipes/fetchPopularRecipe',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/popular-recipe');
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
      const { data } = await axios.get('/recipes/main-page');
      return data.recipes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserRecipes = createAsyncThunk(
  'recipes/fetchUserRecipes',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/ownRecipes');
      return data.recipes;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteUserRecipe = createAsyncThunk(
  'recipes/deleteUserRecipe',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/ownRecipes/${id}`);
      return data.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
