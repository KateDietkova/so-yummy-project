import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';

export const getShoppingList = createAsyncThunk(
  'shoppingList/getShoppingList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/shopping-list');
      return data.data.ingredients;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFromShoppingList = createAsyncThunk(
  'shoppingList/deleteFromShoppingList',
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/shopping-list/${_id}`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
