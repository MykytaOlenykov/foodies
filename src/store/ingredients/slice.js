import { createSlice } from "@reduxjs/toolkit";

import { getAllIngredients } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllIngredients.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(getAllIngredients.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllIngredients.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.error;
      }),
});

export const ingredientsReducer = ingredientsSlice.reducer;
