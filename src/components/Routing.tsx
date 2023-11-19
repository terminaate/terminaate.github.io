import { FC, useEffect, useMemo } from 'react';
import { IntroPage } from '@/pages/IntroPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactsPage } from '@/pages/ContactsPage';
import { AnimatePresence } from 'framer-motion';
import { useRoutingState } from '@/contexts/RoutingContext/hooks/useRoutingState';
import { Nav } from '@/components/Nav';
import { BasicPage } from '@/components/BasicPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { useConfigState } from '@/contexts/ConfigContext/hooks/useConfigState';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const Pages: Record<string, FC> = {
  IntroPage,
  AboutPage,
  ProjectsPage,
  ContactsPage,
};

export const Routing = () => {
  const { currentPage } = useRoutingState();
  const { transitionBetweenPages } = useConfigState();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('CURRENT PAGE:', currentPage);
    }
  }, [currentPage]);

  const Page = useMemo(() => Pages[currentPage] ?? NotFoundPage, [currentPage]);

  return (
    <BasicPage>
      <Nav />
      {transitionBetweenPages ? (
        <AnimatePresence mode={'wait'}>
          <Page key={currentPage} />
        </AnimatePresence>
      ) : (
        <Page />
      )}
    </BasicPage>
  );
};
