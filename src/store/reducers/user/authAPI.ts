import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData } from '@/types/AuthData';
import AuthService from '@/services/AuthService';

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
