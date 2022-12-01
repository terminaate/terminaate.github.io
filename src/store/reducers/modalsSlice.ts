import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalsState {
  loginModal: boolean;
}

export const initialState: ModalsState = {
  loginModal: true,
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
