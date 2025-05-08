import axios from "axios";
import { tokenStorage } from "../utils";
import { BACKEND_URL } from "../constants/common.js";

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors: Add auth token if needed
api.interceptors.request.use((config) => {
  const token = tokenStorage.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const checkApiConnection = () => api.get("/ok");

export default api;
