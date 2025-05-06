import { createAction, isRejectedWithValue } from "@reduxjs/toolkit";

import { tokenStorage } from "../utils";

export const appClearSessionAction = createAction("app/clearSession");

export const appClearSessionMiddleware = (store) => (next) => (action) => {
  if (!isRejectedWithValue(action)) return next(action);

  const error = action.payload?.error;

  if (error?.isHttpError && error.status === 401) {
    tokenStorage.clear();
    store.dispatch(appClearSessionAction());
  }

  return next(action);
};
