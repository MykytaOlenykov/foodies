import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipesByCategory } from "./operations";

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

export const recipesReducer = recipesSlice.reducer;
