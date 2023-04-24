import { createAsyncThunk } from '@reduxjsz/toolkit';
import axios from 'axios';

axios.defaults.baseURL = ' https://so-yummy-api.herokuapp.com/api';



export const fetchIngredients = createAsyncThunk(
    'fetchIngredients',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/ingredients/list');
        const result = response.data
  
        return result;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
