import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';

export interface NotificationState {
  text: string | ReactElement;
  timeout: number;
}

export const initialState: NotificationState = {
  text: '',
  timeout: 1500,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationText(state, action: PayloadAction<NotificationState['text']>) {
      state.text = action.payload;
    },
    setNotificationTimeout(state, action: PayloadAction<NotificationState['timeout']>) {
      state.timeout = action.payload;
    },
    setNotification(
      state,
      action: PayloadAction<NotificationState>,
    ) {
      return action.payload;
    },
  },
});

export const { setNotificationText, setNotificationTimeout, setNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
