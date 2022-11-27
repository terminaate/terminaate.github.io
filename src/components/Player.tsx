import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import YoutubePlayer from '@/components/YoutubePlayer/YoutubePlayer';
import { YouTubePlayer as YouTubeTarget } from 'react-youtube';
import PlayerControls from '@/components/PlayerControls';

const Player = () => {
  const playerRef = useRef<null | YouTubeTarget>(null);
  const [state, setState] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <YoutubePlayer playerRef={playerRef} state={state} setState={setState} />
      <PlayerControls playerRef={playerRef} state={state} setState={setState} />
    </motion.div>
  );
};

export default Player;
