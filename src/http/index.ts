import axios from 'axios';
// import { AuthResponse } from '@/types/ServerResponse/AuthResponse';
// import store from '@/store';
// import { userSlice } from '@/store/reducers/user/userSlice';
// import { logout } from '@/store/reducers/user/authAPI';

export const serverURL = import.meta.env.VITE_SERVER_URL;
const baseURL = serverURL + '/api';

const $api = axios.create({
  baseURL,
});

$api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers!.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// $api.interceptors.response.use(
//     (config) => {
//         return config;
//     },
//     async (error) => {
//         const originalRequest = error.config;
//         if (
//             error.response.status === 401 &&
//             error.config &&
//             !error.config._isRetry &&
//             localStorage.getItem('accessToken')
//         ) {
//             originalRequest._isRetry = true;
//             try {
//                 const response = await axios.post<AuthResponse>(
//                     `${baseURL}/auth/refresh`,
//                     {},
//                     {withCredentials: true},
//                 );
//                 store.dispatch(userSlice.actions.updateUser({authorized: true}));
//                 localStorage.setItem('accessToken', response.data.accessToken);
//                 return $api.request(originalRequest);
//             } catch (e) {
//                 store.dispatch(logout());
//             }
//         }
//         throw error;
//     },
// );

export default $api;
