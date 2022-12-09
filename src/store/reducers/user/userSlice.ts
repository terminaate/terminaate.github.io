import { AnyAction, createSlice, Draft } from '@reduxjs/toolkit';
import { login, refresh } from './authAPI';

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
    logout() {
      localStorage.removeItem('accessToken');
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
    builder.addCase(refresh.fulfilled, handleAuth);
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
