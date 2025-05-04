import { isAxiosError } from "axios";

const DEFAULT_ERROR_MESSAGE = "Something went wrong. Try again.";

export function normalizeHttpError(error) {
  let status = 500;
  let message = DEFAULT_ERROR_MESSAGE;

  if (isAxiosError(error)) {
    status = error.response?.status || 500;
    message = error.response?.data?.message || DEFAULT_ERROR_MESSAGE;
  }

  return { status, message };
}
