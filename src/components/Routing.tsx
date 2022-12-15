import React, { ReactElement, useEffect } from 'react';
import IntroPage from '@/pages/IntroPage';
import HomePage from '@/pages/HomePage';
import ContactsPage from '@/pages/ContactsPage';
import { AnimatePresence } from 'framer-motion';
import BasicPage from '@/components/BasicPage';
import useRoutingContext from '@/hooks/useRoutingContext';
import MenuPage from '@/pages/MenuPage';

export const Pages: Record<string, ReactElement> = {
  IntroPage: <IntroPage />,
  HomePage: <HomePage />,
  ContactsPage: <ContactsPage />,
  MenuPage: <MenuPage />,
};

const Routing = () => {
  const { currentPage } = useRoutingContext().state;

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('CURRENT PAGE:', currentPage);
    }
  }, [currentPage]);

  return (
    <BasicPage>
      {Object.keys(Pages).map((page, key) => (
        <AnimatePresence exitBeforeEnter={true} key={key} mode={'wait'}>
          {currentPage === page && <>{Pages[page]}</>}
        </AnimatePresence>
      ))}
    </BasicPage>
  );
};

export default Routing;
