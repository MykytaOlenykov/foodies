import { configureStore } from "@reduxjs/toolkit";

import { areasReducer } from "./areas";
import { authReducer } from "./auth";
import { categoriesReducer } from "./categories";
import { appClearSessionMiddleware } from "./utils";

export const store = configureStore({
  reducer: {
    areas: areasReducer,
    auth: authReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appClearSessionMiddleware),
});
