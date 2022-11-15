import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroPage from '@/pages/IntroPage';
import HomePage from '@/pages/HomePage';
import PostsPage from '@/pages/PostsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { History } from '@/utils/history';
import { useAppDispatch, useAppSelector } from '@/store';
import { refresh } from '@/store/reducers/user/authAPI';
import { setNotificationText } from '@/store/reducers/notificationSlice';
import WorksPage from '@/pages/WorksPage';
import GithubPage from '@/pages/GithubPage';
import EditPostPage from '@/pages/EditPostPage';
import CreatePostPage from '@/pages/CreatePostPage';
import PostPage from '@/pages/PostPage';

const Routing = () => {
  const location = useLocation();
  const previousRoute = useRef<string>(location.pathname);
  const dispatch = useAppDispatch();
  const { error: serverError } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    History.previousRoute = previousRoute.current;
    previousRoute.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(refresh());
    }
  }, []);

  useEffect(() => {
    if (serverError) {
      dispatch(setNotificationText(serverError));
    }
  }, [serverError]);

  return (
    <AnimatePresence mode={'wait'}>
      <Routes location={location} key={location.key}>
        <Route index element={<IntroPage />} />
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/posts'} element={<PostsPage />} />
        <Route path={'/posts/:id'} element={<PostPage />} />
        <Route path={'/posts/:id/edit'} element={<EditPostPage />} />
        <Route path={'/posts/create'} element={<CreatePostPage />} />
        <Route path={'/works'} element={<WorksPage />} />
        <Route path={'/github'} element={<GithubPage />} />
        <Route path={'/*'} element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
