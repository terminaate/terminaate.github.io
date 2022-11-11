import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData } from '@/types/AuthData';
import AuthService from '@/services/AuthService';
import { logError } from '@/utils/logError';
import { getErrorObject } from '@/utils/getErrorObject';

export const register = createAsyncThunk(
  'auth/register',
  async (registerData: AuthData, thunkAPI) => {
    try {
      const { data } = await AuthService.register(registerData);
      return data;
    } catch (e: any) {
      logError(e);
      return thunkAPI.rejectWithValue(getErrorObject(e).message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: AuthData, thunkAPI) => {
    try {
      const { data } = await AuthService.login(loginData);
      return data;
    } catch (e: any) {
      logError(e);
      return thunkAPI.rejectWithValue(getErrorObject(e).message);
    }
  },
);

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const { data } = await AuthService.refresh();
    return data;
  } catch (e: any) {
    logError(e);
    return thunkAPI.rejectWithValue(getErrorObject(e).message);
  }
});

export default [register, login];
