import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = ' https://so-yummy-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unSetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logout = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/auth/logout');
    unSetToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
