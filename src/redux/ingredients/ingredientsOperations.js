// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { getAllIngredientsAPI } from '../../servicesApi/api'

// axios.defaults.baseURL = ' https://so-yummy-api.herokuapp.com';

// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };
// export const getAllIngredients = createAsyncThunk(
//   'ingredients/list',
//   async (_, thunkApi) => {
//     try {
//       const data = await getAllIngredientsAPI();
  
//       return data.ingredients;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

