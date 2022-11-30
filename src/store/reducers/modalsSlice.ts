import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '@/types/UserData';

export interface ModalsState {
  loginModal: boolean;
  userModal: boolean;
  userModalData: UserData | null;
}

export const initialState: ModalsState = {
  loginModal: false,
  userModal: false,
  userModalData: null,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<Partial<ModalsState>>) {
      return { ...initialState, ...action.payload };
    },
  },
});

export const { setModal } = modalsSlice.actions;

export default modalsSlice.reducer;
