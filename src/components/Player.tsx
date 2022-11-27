import React, { useRef, useState } from 'react';
import YoutubePlayer from '@/components/YoutubePlayer/YoutubePlayer';
import { YouTubePlayer as YouTubeTarget } from 'react-youtube';
import PlayerControls from '@/components/PlayerControls';

const Player = () => {
  const playerRef = useRef<null | YouTubeTarget>(null);
  const [state, setState] = useState<boolean>(false);

  return (
    <>
      <YoutubePlayer playerRef={playerRef} state={state} setState={setState} />
      <PlayerControls playerRef={playerRef} state={state} setState={setState} />
    </>
  );
};

export default Player;
