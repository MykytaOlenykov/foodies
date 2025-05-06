import { isAxiosError } from "axios";

import { DEFAULT_ERROR_MESSAGE } from "../constants/common";

export function normalizeHttpError(error) {
  let status = 500;
  let message = DEFAULT_ERROR_MESSAGE;
  if (isAxiosError(error)) {
    status = error.response?.status || 500;
    message = error.response?.data?.message || DEFAULT_ERROR_MESSAGE;
  }
  return { isHttpError: true, status, message };
}
