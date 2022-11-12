import { AnyAction, createSlice, Draft } from '@reduxjs/toolkit';
import { History } from '@/utils/history';
import authAsyncThunks, { login, refresh, register } from './authAPI';
import { PostData } from '@/types/PostData';

export interface UserState {
  error: null | string;
  authorized: boolean;
  user: {
    id: null | string;
    login: null | string
    posts: PostData[]
    accessToken: null | string;
  };
}

export const initialState: UserState = {
  error: null,
  authorized: false,
  user: {
    id: null,
    login: null,
    posts: [],
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
  },
  extraReducers: (builder) => {
    const handleReject = (state: Draft<UserState>, action: AnyAction) => {
      state.error = action.payload;
    };

    const handlePending = (state: Draft<UserState>) => {
      state.error = null;
    };

    for (const asyncThunk of authAsyncThunks) {
      builder.addCase(asyncThunk.pending, handlePending);
      builder.addCase(asyncThunk.rejected, handleReject);
    }

    const handleAuth = (state: Draft<UserState>, action: AnyAction) => {
      state.user = {
        ...action.payload.user,
        accessToken: action.payload.accessToken,
      };
      state.authorized = true;
      localStorage.setItem('accessToken', state.user.accessToken!);
    };

    const handleLogout = () => {
      History.push('/login');
      return initialState;
    };

    builder.addCase(login.fulfilled, handleAuth);
    builder.addCase(register.fulfilled, handleAuth);

    builder.addCase(refresh.fulfilled, (state: Draft<UserState>, action) => {
      state.user.accessToken = action.payload.accessToken;
      state.authorized = true;
      localStorage.setItem('accessToken', state.user.accessToken!);
    });
    builder.addCase(refresh.pending, handlePending);
    builder.addCase(refresh.rejected, (state: Draft<UserState>, action) => {
      handleReject(state, action);
      if (!state.authorized || !state.user.accessToken) {
        handleLogout();
      }
    });
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
