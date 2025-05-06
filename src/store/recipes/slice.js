import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRecipesByCategory,
  fetchIngredients,
  fetchAreas,
} from "./operations";

const initialState = {
  items: [], // Список рецептів
  total: 0, // Загальна кількість рецептів
  isLoading: false, // Стан завантаження
  error: null, // Помилки
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesByCategory.pending, handlePending)
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(fetchRecipesByCategory.rejected, handleRejected);
  },
});

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, handlePending)
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(fetchIngredients.rejected, handleRejected);
  },
});

const areasSlice = createSlice({
  name: "areas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAreas.pending, handlePending)
      .addCase(fetchAreas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(fetchAreas.rejected, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;
export const ingredientsReducer = ingredientsSlice.reducer;
export const areasReducer = areasSlice.reducer;
