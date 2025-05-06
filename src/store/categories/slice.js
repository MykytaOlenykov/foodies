import { createSlice } from "@reduxjs/toolkit";

import { getAllCategories } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.error;
      }),
});

export const categoriesReducer = categoriesSlice.reducer;
