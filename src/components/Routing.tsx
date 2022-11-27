import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroPage from '@/pages/IntroPage';
import HomePage from '@/pages/HomePage';
import PostsPage from '@/pages/PostsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { History } from '@/utils/history';
import { useAppDispatch } from '@/store';
import { refresh } from '@/store/reducers/user/authAPI';
import WorksPage from '@/pages/WorksPage';
import AuthorizedRoute from '@/components/AuthorizedRoute';

const PostPage = lazy(() => import('@/pages/PostPage'));
const EditPostPage = lazy(() => import('@/pages/EditPostPage'));
const CreatePostPage = lazy(() => import('@/pages/CreatePostPage'));

const Routing = () => {
  const location = useLocation();
  const previousRoute = useRef<string>(location.pathname);
  const dispatch = useAppDispatch();

  useEffect(() => {
    History.previousRoute = previousRoute.current;
    previousRoute.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(refresh());
    }
  }, []);

  return (
    <Suspense fallback={null}>
      <AnimatePresence mode={'wait'}>
        <Routes location={location} key={location.key}>
          <Route index element={<IntroPage />} />
          <Route path={'/home'} element={<HomePage />} />
          <Route path={'/posts'} element={<PostsPage />} />
          <Route path={'/posts/:id'} element={<PostPage />} />
          <Route
            path={'/posts/:id/edit'}
            element={
              <AuthorizedRoute>
                <EditPostPage />
              </AuthorizedRoute>
            }
          />
          <Route
            path={'/posts/create'}
            element={
              <AuthorizedRoute>
                <CreatePostPage />
              </AuthorizedRoute>
            }
          />
          <Route path={'/works'} element={<WorksPage />} />
          <Route path={'/*'} element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default Routing;
