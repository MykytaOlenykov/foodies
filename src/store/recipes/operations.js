import { createAsyncThunk } from "@reduxjs/toolkit";
import { normalizeHttpError } from "../../utils";

import api from "../../services/api";

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchRecipesByCategory",
  async (
    { categoryId, ingredient, area, page, limit },
    { rejectWithValue },
  ) => {
    try {
      const params = new URLSearchParams({
        page,
        limit,
        ...(categoryId ? { categoryId } : {}),
        ...(ingredient && { ingredientId: ingredient }),
        ...(area && { areaId: area }),
      });

      const { data } = await api.get(`/recipes?${params.toString()}`);
      return {
        recipes: data.data.recipes,
        total: data.data.total,
      };
    } catch (error) {
      return rejectWithValue({ error: normalizeHttpError(error) });
    }
  },
);

export const toggleFavorite = createAsyncThunk(
  "recipes/toggleFavorite",
  async ({ recipeId, isFavorite }, { rejectWithValue }) => {
    try {
      const method = isFavorite ? "DELETE" : "POST";
      const { data } = await api[method](`recipes/favorites/${recipeId}`, {});
      return data.data;
    } catch (error) {
      return rejectWithValue({ error: normalizeHttpError(error) });
    }
  },
);
