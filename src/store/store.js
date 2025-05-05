import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../redux/recipes/slice";

const store = configureStore({
  reducer: {
    recipes: recipesReducer, // Додаємо редюсер для рецептів
  },
});

export default store;
