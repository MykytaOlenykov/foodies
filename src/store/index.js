import { configureStore } from "@reduxjs/toolkit";

import { areasReducer } from "./areas";
import { authReducer } from "./auth";
import { categoriesReducer } from "./categories";
import { ingredientsReducer } from "./ingredients";
import { appClearSessionMiddleware } from "./utils";
import { recipesReducer } from "./recipes";
import { testimonialsReducer } from "./testimonials";

export const store = configureStore({
  reducer: {
    areas: areasReducer,
    auth: authReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    testimonials: testimonialsReducer,
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appClearSessionMiddleware),
});
