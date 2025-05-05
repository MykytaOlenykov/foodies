import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchRecipesByCategory",

  async ({ category, page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://mykytaolenykov.com/foodies/api/recipes?categoryId=${category}&page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
