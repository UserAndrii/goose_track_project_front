import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
  getCurrentUser,
  updateUser,
} from './operations';

const initialState = {
  user: {
    _id: null,
    userName: null,
    email: null,
    avatarURL: null,
    phone: null,
    skype: null,
    birthDay: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isFetchingCurrentUser = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
