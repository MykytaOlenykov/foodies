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

export const checkApiConnection = () => api.get("api/ok");

export const getUserDataById = async (id) => {
  const response = await api.get(`api/users/${id}`);
  return response.data?.data;
};

export const updateUserAvatar = async (file) => {
  const formData = new FormData();
  formData.append("avatar", file);

  const response = await api.patch("api/users/avatars", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data?.data;
};

export const followUserById = async (userId) => {
  const response = await api.post(`api/users/following/${userId}`);
  return response.data?.data;
};

export default api;
