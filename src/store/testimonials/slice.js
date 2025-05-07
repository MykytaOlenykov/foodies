import { createSlice } from "@reduxjs/toolkit";

import { getAllTestimonials } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllTestimonials.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(getAllTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTestimonials.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.error;
      }),
});

export const testimonialsReducer = testimonialsSlice.reducer;
