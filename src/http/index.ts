import axios from 'axios';
import store from '@/store';
import { logout, UserState } from '@/store/reducers/user/userSlice';
import { getErrorObject } from '@/utils/getErrorObject';
import { logError } from '@/utils/logError';
import { setNotificationText } from '@/store/reducers/notificationSlice';

export const serverURL = import.meta.env.VITE_SERVER_URL;
export const userAvatarUrl = 'https://robohash.org/';
const baseURL = serverURL + '/api';

const $api = axios.create({
  baseURL,
});

$api.interceptors.request.use((config) => {
  const accessToken =
    (store.getState().userSlice as UserState).user.accessToken ||
    localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers!.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  (e) => {
    logError(e);
    store.dispatch(setNotificationText(getErrorObject(e).message));
    if (e.response.code === 401) {
      store.dispatch(logout());
    }
  },
);

export default $api;
