import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { useAppDispatch } from '@/store';
import { refresh } from '@/store/reducers/user/authAPI';
import LoadingPage from '@/pages/LoadingPage';
import BasicPage from '@/components/BasicPage';

const WorksPage = lazy(() => import('@/pages/WorksPage'));

const Routing = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(refresh());
    }
  }, []);

  return (
    <Suspense fallback={<LoadingPage />}>
      <BasicPage>
        <AnimatePresence mode={'wait'}>
          <Routes location={location} key={location.key}>
            <Route index element={<HomePage />} />
            <Route path={'/works'} element={<WorksPage />} />
            <Route path={'/*'} element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </BasicPage>
    </Suspense>
  );
};

export default Routing;
