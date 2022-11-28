import React, { FC } from 'react';
import Particles from '@/components/Particles';
import Routing from '@/components/Routing';
import Notification from '@/components/Notification';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Modals from '@/components/Modals';
import Player from '@/components/Player';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const App: FC = () => {
  const location = useLocation();

  return (
    <>
      <LanguageSwitcher />
      <Particles particlesCount={200} />
      <AnimatePresence>
        {location.pathname !== '/' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Player />
          </motion.div>
        )}
      </AnimatePresence>
      <Routing />
      <Notification />
      <Modals />
    </>
  );
};

export default App;
