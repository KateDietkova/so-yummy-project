import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com';

export const fetchPopularRecipe = createAsyncThunk(
  'recipies/fetchPopular',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/popular-recipe');
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchCategoriesList = createAsyncThunk(
//   "categories/fetchCategoriesList",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await instance.get("/api/recipes/category-list");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// export const fetchRecipesByCategory = createAsyncThunk(
//   "categories/fetchRecipesByCategory",
//   async ({ categoryName }, { rejectWithValue }) => {
//     try {
//       const response = await instance.get(
//         `/recipes/category/${categoryName}`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
