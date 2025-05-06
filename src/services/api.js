import axios from "axios";
import { tokenStorage } from "../utils";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
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

export const getUserDataById = (id) => api.get(`api/users/${id}`);

export default api;
