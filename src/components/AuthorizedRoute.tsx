import React, { FC, ReactElement, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import AuthService from '@/services/AuthService';
import { updateUser } from '@/store/reducers/user/userSlice';
import NotFoundPage from '@/pages/NotFoundPage';

interface IAuthorizedRoute {
  children: ReactElement;
}

const AuthorizedRoute: FC<IAuthorizedRoute> = ({ children }) => {
  const isUserAuthorized = useRef<boolean>(false);
  const { accessToken } = useAppSelector((state) => state.userSlice.user);
  const { authorized } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (accessToken || localStorage.getItem('accessToken')) {
      AuthService.refresh()
        .then((r) => {
          dispatch(
            updateUser({
              authorized: true,
              user: { ...r.data.user, accessToken: r.data.accessToken },
            }),
          );
          localStorage.setItem('accessToken', r.data.accessToken);
          isUserAuthorized.current = true;
        })
        .catch(() => (isUserAuthorized.current = false));
    }
  }, []);

  if (!isUserAuthorized.current || !authorized) {
    return <NotFoundPage />;
  }

  return children;
};

export default AuthorizedRoute;
