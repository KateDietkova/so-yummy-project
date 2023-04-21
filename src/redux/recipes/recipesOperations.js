

// export const fetchRecipe = createAsyncThunk(
//   'recipe/fetchRecipe',
//   async (id, thunkAPI) => {
    
//     try {
//       const response = await axios.get(`/recipes/${id}`);
//       if (response.status === 304) {
//         return;
//       }
//       return response?.data.data.recipe;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com';

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