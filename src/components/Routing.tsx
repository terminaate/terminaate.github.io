import { FC, lazy, Suspense, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRoutingState } from '@/contexts/RoutingContext/hooks/useRoutingState';
import { Nav } from '@/components/Nav';
import { BasicPage } from '@/components/BasicPage';
import { useConfigState } from '@/contexts/ConfigContext/hooks/useConfigState';
import IntroPage from '@/pages/IntroPage';
import AboutPage from '@/pages/AboutPage';

const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ContactsPage = lazy(() => import('@/pages/ContactsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

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
      <Suspense fallback={null}>
        {transitionBetweenPages ? (
          <AnimatePresence mode={'wait'}>
            <Page key={currentPage} />
          </AnimatePresence>
        ) : (
          <Page />
        )}
      </Suspense>
    </BasicPage>
  );
};
