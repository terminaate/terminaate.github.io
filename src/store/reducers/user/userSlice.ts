import { AnyAction, createSlice, Draft } from '@reduxjs/toolkit';
import { History } from '@/utils/history';
import { login, refresh, register } from './authAPI';

export interface UserState {
  authorized: boolean;
  user: {
    id: null | string;
    login: null | string;
    accessToken: null | string;
  };
}

export const initialState: UserState = {
  authorized: false,
  user: {
    id: null,
    login: null,
    accessToken: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      return { ...state, ...action.payload };
    },
    logout() {
      History.push('/login');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    const handleAuth = (state: Draft<UserState>, action: AnyAction) => {
      state.user = {
        ...action.payload.user,
        accessToken: action.payload.accessToken,
      };
      state.authorized = true;
      localStorage.setItem('accessToken', state.user.accessToken!);
    };

    builder.addCase(login.fulfilled, handleAuth);
    builder.addCase(register.fulfilled, handleAuth);
    builder.addCase(refresh.fulfilled, handleAuth);
  },
});

export const { updateUser, logout } = userSlice.actions;

export default userSlice.reducer;
