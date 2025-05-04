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
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = null;
      })
      .addCase(register.pending, () => {})
      .addCase(register.rejected, () => {})
      .addCase(login.fulfilled, () => {})
      .addCase(login.pending, () => {})
      .addCase(login.rejected, () => {})
      .addCase(logout.fulfilled, () => {})
      .addCase(logout.pending, () => {})
      .addCase(logout.rejected, () => {})
      .addCase(getCurrentUser.fulfilled, () => {})
      .addCase(getCurrentUser.pending, () => {})
      .addCase(getCurrentUser.rejected, () => {}),
});

export const authReducer = authSlice.reducer;
