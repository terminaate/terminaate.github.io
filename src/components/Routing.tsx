import React, { FC, useEffect } from 'react';
import IntroPage from '@/pages/IntroPage';
import AboutPage from '@/pages/AboutPage';
import ContactsPage from '@/pages/ContactsPage';
import { AnimatePresence } from 'framer-motion';
import useRoutingContext from '@/hooks/useRoutingContext';
import Nav from '@/components/Nav';
import BasicPage from '@/components/BasicPage';
import ProjectsPage from '@/pages/ProjectsPage';

export const Pages: Record<string, FC> = {
  IntroPage,
  AboutPage,
  ProjectsPage,
  ContactsPage,
};

const Routing = () => {
  const { currentPage } = useRoutingContext().state;

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('CURRENT PAGE:', currentPage);
    }
  }, [currentPage]);

  const Page = Pages[currentPage];

  return (
    <BasicPage>
      <Nav />
      <AnimatePresence mode={'wait'}>
        <Page key={currentPage} />
      </AnimatePresence>
    </BasicPage>
  );
};
0;

export default Routing;
