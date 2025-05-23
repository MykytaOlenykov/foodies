import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout, getCurrentUser } from "./operations";
import { appClearSessionAction } from "../utils";

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    avatarURL: null,
  },
  error: null,
  isLoadingStatus: true,
  isLoggedIn: false,
  isOpenSignUp: false,
  isOpenSignIn: false,
  isOpenLogOut: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openSignUp(state) {
      state.isOpenSignUp = true;
    },
    closeSignUp(state) {
      state.isOpenSignUp = false;
    },
    openSignIn(state) {
      state.isOpenSignIn = true;
    },
    closeSignIn(state) {
      state.isOpenSignIn = false;
    },
    openLogOut(state) {
      state.isOpenLogOut = true;
    },
    closeLogOut(state) {
      state.isOpenLogOut = false;
    },
    updateAvatar(state, { payload }) {
      state.user.avatarURL = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isLoggedIn = true;
        state.isOpenSignUp = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isLoggedIn = true;
        state.isOpenSignIn = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { ...initialState.user };
        state.isLoggedIn = false;
        state.isOpenLogOut = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isLoggedIn = true;
        state.isLoadingStatus = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoadingStatus = true;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoadingStatus = false;
      })
      .addCase(appClearSessionAction, (state) => {
        state.user = { ...initialState.user };
        state.error = null;
        state.isLoggedIn = false;
        state.isLoadingStatus = false;
        state.isOpenLogOut = false;
      }),
});

export const {
  openSignUp,
  closeSignUp,
  openSignIn,
  closeSignIn,
  openLogOut,
  closeLogOut,
  updateAvatar,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
