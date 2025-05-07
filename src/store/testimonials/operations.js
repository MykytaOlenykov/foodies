import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";
import { normalizeHttpError } from "../../utils";

export const getAllTestimonials = createAsyncThunk(
  "testimonials/getAll",

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/testimonials");

      return data.data.testimonials;
    } catch (error) {
      return rejectWithValue({ error: normalizeHttpError(error) });
    }
  },
);
