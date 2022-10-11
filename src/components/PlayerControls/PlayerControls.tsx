import React, { FC, MutableRefObject, useEffect, useState } from 'react';
import { YouTubePlayer as YouTubeTarget } from 'react-youtube';
import cl from './PlayerControls.module.scss';
import { BiHelpCircle, IoMdVolumeLow } from 'react-icons/all';

interface IPlayerControls {
  playerRef: MutableRefObject<null | YouTubeTarget>;
}

const PlayerControls: FC<IPlayerControls> = ({ playerRef }) => {
  const [isPlayed, setPlayed] = useState<boolean>(window.previousRoute === '/');
  const [playerVolume, setPlayerVolume] = useState<number>(
    playerRef.current?.getVolume() || 10,
  );

  const handleVideoState = () => {
    if (isPlayed) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setPlayed(!isPlayed);
  };

  useEffect(() => {
    playerRef.current?.setVolume(playerVolume);
  }, [playerVolume]);

  return (
    <div className={cl.playerControlsContainer}>
      <div
        data-played={isPlayed}
        onClick={handleVideoState}
        className={cl.controlsContainer}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
      <button
        onClick={() =>
          alert(
            'Currently playing \n' + playerRef.current?.getVideoData().title,
          )
        }
        className={cl.trackTitleButton}
      >
        <BiHelpCircle />
      </button>
      <div className={cl.volumeControlContainer}>
        <button className={cl.volumeButton}>
          <IoMdVolumeLow />
        </button>
        <input
          className={cl.volumeInput}
          type="range"
          value={playerVolume}
          min={0}
          max={100}
          onChange={(e) => setPlayerVolume(e.target.valueAsNumber)}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
