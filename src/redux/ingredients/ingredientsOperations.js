import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllIngredientsAPI } from '../../servicesApi/api'

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';


export const getAllIngredients = createAsyncThunk(
  'ingredients/list',
  async (_, thunkAPI) => {
    
    try {
      const data = await getAllIngredientsAPI();
  console.log(data)
      return data.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

