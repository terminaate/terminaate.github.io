import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PostsPage from '@/pages/PostsPage';
import PostPage from '@/pages/PostPage';
import HomePageNav from '@/pages/HomePage/HomePageNav';
import WorksPage from '@/pages/WorksPage';

export const RoutesArray = [
  {
    name: 'Home',
    nav: false,
    path: '/',
    element: <HomePageNav />,
  },
  {
    name: 'Works',
    element: <WorksPage />,
    path: '/works',
    nav: true,
  },
  {
    name: 'Posts',
    element: <PostsPage />,
    path: '/posts',
    nav: true,
  },
  {
    name: 'Post',
    element: <PostPage />,
    path: '/posts/:id',
    nav: false,
  },
];

export const NavRoutes = RoutesArray.filter(r => r.nav).map(r => ({ name: r.name, path: r.path }));

const Routing = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode={'wait'}>
      <Routes location={location} key={location.pathname}>
        {RoutesArray.map((route, key) => (
          <Route path={route.path} key={key} element={route.element} />
        ))}
      </Routes>
    </AnimatePresence>

  );
};

export default Routing;