import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout, getCurrentUser } from "./operations";

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, () => {
        // TODO
      })
      .addCase(register.pending, () => {
        // TODO
      })
      .addCase(register.rejected, () => {
        // TODO
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

export const authReducer = authSlice.reducer;
