import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
// import { useAppDispatch } from '@/store';
// import { refresh } from '@/store/reducers/user/authAPI';
import WorksPage from '@/pages/WorksPage';
import LoadingPage from '@/pages/LoadingPage';
import BasicPage from '@/components/BasicPage';
import ContactsPage from '@/pages/ContactsPage';

const Routing = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingPage />}>
      <BasicPage>
        <AnimatePresence mode={'wait'}>
          <Routes location={location} key={location.key}>
            <Route index element={<HomePage />} />
            <Route path={'/works'} element={<WorksPage />} />
            <Route path={'/contacts'} element={<ContactsPage />} />
            <Route path={'/*'} element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </BasicPage>
    </Suspense>
  );
};

export default Routing;
