import React, { ReactElement, useEffect } from 'react';
import IntroPage from '@/pages/IntroPage';
import HomePage from '@/pages/HomePage';
import ContactsPage from '@/pages/ContactsPage';
import { AnimatePresence } from 'framer-motion';
import BasicPage from '@/components/BasicPage';
import useRoutingContext from '@/hooks/useRoutingContext';
import NotFoundPage from '@/pages/NotFoundPage';

export const Pages: Record<string, ReactElement> = {
  IntroPage: <IntroPage />,
  HomePage: <HomePage />,
  ContactsPage: <ContactsPage />,
};

const Routing = () => {
  const { currentPage } = useRoutingContext().state;

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('CURRENT PAGE:', currentPage);
    }
  }, [currentPage]);

  const PagesKeys = Object.keys(Pages);

  return (
    <BasicPage>
      {PagesKeys.includes(currentPage) ? (
        PagesKeys.map((page, key) => (
          <AnimatePresence key={key} mode={'wait'}>
            {currentPage === page && <>{Pages[page]}</>}
          </AnimatePresence>
        ))
      ) : (
        <NotFoundPage />
      )}
    </BasicPage>
  );
};

export default Routing;
