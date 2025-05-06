import { createSlice } from "@reduxjs/toolkit";

import { getAllAreas } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const areasSlice = createSlice({
  name: "areas",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllAreas.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(getAllAreas.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAreas.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export const areasReducer = areasSlice.reducer;
