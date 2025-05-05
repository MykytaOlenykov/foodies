import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchRecipesByCategory",

  async ({ category, page, limit }, { rejectWithValue }) => {
    try {
      let url = null;

      if (category === "all") {
        url = `https://mykytaolenykov.com/foodies/api/recipes?page=${page}&limit=${limit}`;
      } else {
        url = `https://mykytaolenykov.com/foodies/api/recipes?categoryId=${category}&page=${page}&limit=${limit}`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTestimonials = createAsyncThunk(
  "recipes/fetchTestimonials",

  async (_, { rejectWithValue }) => {
    try {
      const url = "https://mykytaolenykov.com/foodies/api/testimonials";

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
