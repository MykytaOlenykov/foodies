import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";
import { normalizeHttpError } from "../../utils";

export const getAllAreas = createAsyncThunk(
  "areas/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/areas");
      return data.data.areas;
    } catch (error) {
      return rejectWithValue({ error: normalizeHttpError(error) });
    }
  },
);
