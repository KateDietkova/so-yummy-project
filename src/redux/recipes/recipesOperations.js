import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


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
      const data = await axios.delete(`/ownRecipes/${id}`);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

