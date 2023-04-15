import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, photo: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
