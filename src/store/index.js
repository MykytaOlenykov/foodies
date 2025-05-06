import { configureStore } from "@reduxjs/toolkit";

import { areasReducer } from "./areas";
import { authReducer } from "./auth";
import { appClearSessionMiddleware } from "./utils";

export const store = configureStore({
  reducer: {
    areas: areasReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appClearSessionMiddleware),
});
