import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout, getCurrentUser } from "./operations";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, () => {})
      .addCase(login.fulfilled, () => {})
      .addCase(logout.fulfilled, () => {})
      .addCase(getCurrentUser.fulfilled, () => {}),
});

export const authReducer = authSlice.reducer;
