import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout, getCurrentUser } from "./operations";

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    avatarURL: null,
  },
  error: null,
  isOpenSignUp: false,
  isOpenSignIn: false,
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
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isOpenSignUp = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isOpenSignIn = false;
      })
      .addCase(logout.fulfilled, () => {
        // TODO
      })
      .addCase(logout.pending, () => {
        // TODO
      })
      .addCase(logout.rejected, () => {
        // TODO
      })
      .addCase(getCurrentUser.fulfilled, () => {
        // TODO
      })
      .addCase(getCurrentUser.pending, () => {
        // TODO
      })
      .addCase(getCurrentUser.rejected, () => {
        // TODO
      }),
});

export const { openSignUp, closeSignUp, openSignIn, closeSignIn } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
