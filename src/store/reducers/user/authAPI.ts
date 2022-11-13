import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData } from '@/types/AuthData';
import AuthService from '@/services/AuthService';

export const register = createAsyncThunk(
  'auth/register',
  async (registerData: AuthData) => {
    const { data } = await AuthService.register(registerData);
    return data;
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: AuthData) => {
    const { data } = await AuthService.login(loginData);
    return data;
  },
);

export const refresh = createAsyncThunk('auth/refresh', async () => {
  const { data } = await AuthService.refresh();
  return data;
});
