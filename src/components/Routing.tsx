import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroPage from '@/pages/IntroPage';
import HomePage from '@/pages/HomePage';

const Routing = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode={'wait'}>
      <Routes location={location} key={location.key}>
        <Route index element={<IntroPage />} />
        <Route path={'/home'} element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;