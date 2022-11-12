import axios from 'axios';
import store from '@/store';
import { UserState } from '@/store/reducers/user/userSlice';

export const serverURL = import.meta.env.VITE_SERVER_URL;
const baseURL = serverURL + '/api';

const $api = axios.create({
  baseURL,
});

$api.interceptors.request.use((config) => {
  const accessToken = (store.getState().userSlice as UserState).user.accessToken;
  if (accessToken) {
    config.headers!.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default $api;
