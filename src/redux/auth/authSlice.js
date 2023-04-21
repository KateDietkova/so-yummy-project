import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  verification,
  login,
  fetchCurrentUser,
  logout,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrl: null,
    createdAt: null,
    verify: false,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      //refister

      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })

      //verification

      .addCase(verification.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(verification.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(verification.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })

      //login

      .addCase(login.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })

      //current user
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.error = null;
        state.isRefreshing = false;
        state.user = payload.user;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = null;
      })

      //logout

      .addCase(logout.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
