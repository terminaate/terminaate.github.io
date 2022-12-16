import React, { FC, useEffect } from 'react';
import IntroPage from '@/pages/IntroPage';
import HomePage from '@/pages/HomePage';
import ContactsPage from '@/pages/ContactsPage';
import { AnimatePresence } from 'framer-motion';
import BasicPage from '@/components/BasicPage';
import useRoutingContext from '@/hooks/useRoutingContext';
import MenuPage from '@/pages/MenuPage';

export const Pages: Record<string, FC> = {
  IntroPage,
  HomePage,
  ContactsPage,
  MenuPage,
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
      <AnimatePresence mode={'wait'}>
        <Page key={currentPage} />
      </AnimatePresence>
      {/*{Object.keys(Pages).map((page, key) => (*/}
      {/*  <AnimatePresence key={key} mode={'wait'}>*/}
      {/*    {currentPage === page && <>{Pages[page]}</>}*/}
      {/*  </AnimatePresence>*/}
      {/*))}*/}
    </BasicPage>
  );
};0

export default Routing;
