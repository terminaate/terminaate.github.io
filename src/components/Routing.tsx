import React, { ReactElement } from 'react';
import IntroPage from '@/pages/IntroPage';
import HomePage from '@/pages/HomePage';
import WorksPage from '@/pages/WorksPage';
import ContactsPage from '@/pages/ContactsPage';
import { AnimatePresence } from 'framer-motion';
import BasicPage from '@/components/BasicPage';
import useRoutingContext from '@/hooks/useRoutingContext';

export const Pages: Record<string, ReactElement> = {
  IntroPage: <IntroPage />,
  HomePage: <HomePage />,
  WorksPage: <WorksPage />,
  ContactsPage: <ContactsPage />,
};

const Routing = () => {
  const { currentPage } = useRoutingContext().state;

  console.log(currentPage);

  return (
    <BasicPage>
      {Object.keys(Pages).map((page, key) => (
        <AnimatePresence key={key} mode={'wait'}>
          {currentPage === page && <>{Pages[page]}</>}
        </AnimatePresence>
      ))}
    </BasicPage>
  );
};

export default Routing;
