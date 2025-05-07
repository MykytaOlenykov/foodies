import axios from "axios";
import { tokenStorage } from "../utils";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Interceptors: Add auth token if needed
api.interceptors.request.use((config) => {
  const token = tokenStorage.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  } else {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

export const checkApiConnection = () => api.get("/ok");

export default api;
