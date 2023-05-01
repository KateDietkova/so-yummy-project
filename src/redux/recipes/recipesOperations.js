import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api-jvk2.onrender.com/api';


export const fetchRecipe = createAsyncThunk(
  '/recipes/fetchRecipe',
  async (_id, thunkAPI) => {
    
    try {
      const response = await axios.get(`/recipes/${_id}`);
      return response?.data.data;
    
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
