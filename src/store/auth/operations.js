import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";
import { tokenStorage } from "../../utils/tokenStorage";

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/register", { name, email, password });
      return res.data.user;
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      tokenStorage.token = data.token;
      return data.user;
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/auth/current");
      return res.data.user;
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
);
