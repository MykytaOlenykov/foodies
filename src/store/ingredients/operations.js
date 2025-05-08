import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";
import { normalizeHttpError } from "../../utils";

export const getAllIngredients = createAsyncThunk(
  "ingredients/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/ingredients?limit=1000");
      return data.data.ingredients;
    } catch (error) {
      return rejectWithValue({ error: normalizeHttpError(error) });
    }
  },
);
