import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth";
import { appClearSessionMiddleware } from "./utils";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appClearSessionMiddleware),
});
