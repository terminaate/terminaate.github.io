import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { YouTubePlayer as YouTubeTarget } from 'react-youtube';
import cl from './PlayerControls.module.scss';
import {
  BiHelpCircle,
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
} from 'react-icons/all';

interface IPlayerControls {
  playerRef: MutableRefObject<null | YouTubeTarget>;
}

const PlayerControls: FC<IPlayerControls> = ({ playerRef }) => {
  const [isPlayed, setPlayed] = useState<boolean>(false);
  const [playerVolume, setPlayerVolume] = useState<number>(
    playerRef.current?.getVolume() || 10,
  );
  const oldVolume = useRef<number>(playerVolume);

  useEffect(() => {
    if (window.previousRoute === '/') {
      setPlayed(true);
    }
  }, []);

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

  const onVolumeButtonClick = () => {
    if (playerVolume) {
      oldVolume.current = playerVolume;
      setPlayerVolume(0);
    } else {
      setPlayerVolume(oldVolume.current);
      oldVolume.current = playerVolume;
    }
  };

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
          window.setNotification(playerRef.current?.getVideoData().title)
        }
        className={cl.trackTitleButton}
      >
        <BiHelpCircle />
      </button>
      <div className={cl.volumeControlContainer}>
        <button onClick={onVolumeButtonClick} className={cl.volumeButton}>
          {playerVolume < 50 ? (
            <>{playerVolume === 0 ? <IoMdVolumeMute /> : <IoMdVolumeLow />}</>
          ) : (
            <IoMdVolumeHigh />
          )}
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
