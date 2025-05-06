import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import api from "../../services/api";

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchRecipesByCategory",

  async ({ category, ingredient, area, page, limit }, { rejectWithValue }) => {
    try {
      let url = null;
      console.log("API", api); // Додано для перевірки API
      if (category === "all") {
        url = `https://mykytaolenykov.com/foodies/api/recipes?page=${page}&limit=${limit}`;
      } else {
        url = `https://mykytaolenykov.com/foodies/api/recipes?categoryId=${category}&page=${page}&limit=${limit}`;
      }

      if (ingredient) {
        url += `&ingredientId=${ingredient}`;
      }

      if (area) {
        url += `&areaId=${area}`;
      }
      console.log("URL:", url); // Додано для перевірки URL
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

export const fetchIngredients = createAsyncThunk(
  "recipes/fetchIngredients",

  async (_, { rejectWithValue }) => {
    try {
      const url =
        "https://mykytaolenykov.com/foodies/api/ingredients?limit=1000";

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

export const fetchAreas = createAsyncThunk(
  "recipes/fetchAreas",

  async (_, { rejectWithValue }) => {
    try {
      const url = "https://mykytaolenykov.com/foodies/api/areas?limit=1000";

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
