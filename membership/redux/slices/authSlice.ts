"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../store"; // Adjust the import path as necessary

// Base API URL
const API_BASE_URL = "http://127.0.0.1:8000/api";

// Define the initial state
interface User {
  id: string;
  username: string;
  email: string;
  phone: number;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Define AsyncThunkConfig
interface AsyncThunkConfig {
  state: RootState; // Use RootState here
  rejectValue: string;
}

// Async Thunks
export const loginUser = createAsyncThunk<
  { user: User; token: string }, // Return type
  { email: string; password: string }, // Argument type
  AsyncThunkConfig // Rejection type
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, credentials, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Login failed");
  }
});

export const registerUser = createAsyncThunk<
  { user: User }, // Return type
  {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    number: number;
    password: string;
  }, // Argument type
  AsyncThunkConfig // Rejection type
>("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register/`, userData, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Registration failed");
  }
});
// Async Thunks
export const updateUser = createAsyncThunk<
  { user: Partial<User> }, // Return type
  { username: string; first_name: string; last_name: string; phone: number }, // Argument type
  AsyncThunkConfig // Rejection type
>("auth/update", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update/`, userData, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Update failed");
  }
});

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred during login";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred during registration";
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user) {
          state.user = { ...state.user, ...action.payload.user };
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred during update";
      });
  },
});

export default authSlice.reducer;
