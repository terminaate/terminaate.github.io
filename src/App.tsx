import React, { FC, useRef } from 'react';
import cl from './App.module.scss';
import Particles from '@/components/Particles';
import Routing from '@/components/Routing';
import Notification from '@/components/Notification';
import YoutubePlayer from '@/components/YoutubePlayer';
import PlayerControls from '@/components/PlayerControls';
import { useLocation } from 'react-router-dom';
import { YouTubePlayer as YouTubeTarget } from 'react-youtube';
import { AnimatePresence, motion } from 'framer-motion';

const App: FC = () => {
  const location = useLocation();
  const playerRef = useRef<null | YouTubeTarget>(null);

  return (
    <>
      <div className={cl.backgroundParticles}>
        <Particles particlesCount={200} />
      </div>
      <AnimatePresence>
        {location.pathname !== '/' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <YoutubePlayer playerRef={playerRef} />
            <PlayerControls playerRef={playerRef} />
          </motion.div>
        )}
      </AnimatePresence>
      <Routing />
      <Notification />
    </>
  );
};

export default App;
