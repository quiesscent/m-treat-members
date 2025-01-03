"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from 'next/navigation';

// Base API URL
const API_BASE_URL = "http://127.0.0.1:8000/api";

// Define the initial state
interface AuthState {
  user: { id: string; name: string; email: string } | null;
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

// Define async thunks for API calls
export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue },
  ) => {
    const router = useRouter();
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      router.push('/dashboard');
      return response.data;

    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  },
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    userData: { username: string; email: string; password: string; phone: number },
    { rejectWithValue },
  ) => {
    const router = useRouter();
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData);
      router.push('/login');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  },
);

export const updateUser = createAsyncThunk(
  "auth/update",
  async (userData: { name?: string; email?: string }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/update`, userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Update failed");
    }
  },
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {

    const router = useRouter();
    try {
      await axios.post(`${API_BASE_URL}/logout`);
      router.push('/');
      return null;

    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Logout failed");
    }
  },
);

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
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
        state.error = action.payload as string;
      })
      // Register
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
        state.error = action.payload as string;
      })
      // Update
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload } as AuthState["user"];
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
