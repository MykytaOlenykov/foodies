import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { recipesReducer, ingredientsReducer, areasReducer } from "./recipes";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    areas: areasReducer,
  },
});
