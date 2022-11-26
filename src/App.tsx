import React, { FC } from 'react';
import Particles from '@/components/Particles';
import Routing from '@/components/Routing';
import Notification from '@/components/Notification';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Modals from '@/components/Modals';
import Player from '@/components/Player';

const App: FC = () => {
  const location = useLocation();
  return (
    <>
      <Particles particlesCount={200} />
      <AnimatePresence>
        {location.pathname !== '/' && (
          <Player />
        )}
      </AnimatePresence>
      <Routing />
      <Notification />
      <Modals />
    </>
  );
};

export default App;
