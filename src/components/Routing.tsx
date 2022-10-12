import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroPage from '@/pages/IntroPage';
import HomePage from '@/pages/HomePage';
import PostsPage from '@/pages/PostsPage';
import NotFoundPage from '@/pages/NotFoundPage';

const Routing = () => {
  const location = useLocation();
  const previousRoute = useRef<string>(location.pathname);

  useEffect(() => {
    // Im too lazy for doing a context for that. so thats why im just a set previousRoute as a window property
    window.previousRoute = previousRoute.current;
    previousRoute.current = location.pathname;
  }, [location.pathname]);

  return (
    <AnimatePresence mode={'wait'}>
      <Routes location={location} key={location.key}>
        <Route index element={<IntroPage />} />
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/posts'} element={<PostsPage />} />
        <Route path={'/works'} element={<PostsPage />} />
        <Route path={'/github'} element={<PostsPage />} />
        <Route path={'/*'} element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
