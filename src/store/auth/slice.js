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
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isOpenSignUp = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(login.fulfilled, () => {
        // TODO
      })
      .addCase(login.pending, () => {
        // TODO
      })
      .addCase(login.rejected, () => {
        // TODO
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

export const { openSignUp, closeSignUp } = authSlice.actions;

export const authReducer = authSlice.reducer;
