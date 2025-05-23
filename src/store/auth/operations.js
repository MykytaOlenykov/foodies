import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";
import { tokenStorage, normalizeHttpError } from "../../utils";

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      tokenStorage.token = data.data.token;
      return data.data.user;
    } catch (error) {
      return rejectWithValue({ error: normalizeHttpError(error) });
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      tokenStorage.token = data.data.token;
      return data.data.user;
    } catch (error) {
      return rejectWithValue({ error: normalizeHttpError(error) });
    }
  },
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/auth/logout");
      tokenStorage.clear();
    } catch (error) {
      return rejectWithValue({ error: normalizeHttpError(error) });
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/auth/current");
      return data.data.user;
    } catch (error) {
      return rejectWithValue({ error: normalizeHttpError(error) });
    }
  },
);
