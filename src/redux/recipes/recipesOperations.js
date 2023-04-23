import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';

export const fetchRecipe = createAsyncThunk(
  '/recipes/fetchRecipe',
  async (id, thunkAPI) => {
    
    try {
      const response = await axios.get(`/recipes/${id}`);
      // console.log(response)
      console.log(response.data)
      // if (!response) {
      //   return;
      // }
      return response.data;
    
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    
  }
  
);




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