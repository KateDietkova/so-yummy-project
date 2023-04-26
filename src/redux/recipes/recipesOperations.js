import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';


export const fetchRecipe = createAsyncThunk(
  '/recipes/fetchRecipe',
  async (_id, thunkAPI) => {
    
    try {
      const response = await axios.get(`/recipes/${_id}`);
      
      // console.log(response)
      console.log(response.data)
      // if (!response) {
      //   return;
      // }
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
