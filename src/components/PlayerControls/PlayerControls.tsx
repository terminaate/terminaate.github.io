import React, {
  ChangeEvent,
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
import { History } from '@/utils/history';
import { useAppDispatch } from '@/store';
import { setNotificationText } from '@/store/reducers/notificationSlice';

interface IPlayerControls {
  playerRef: MutableRefObject<null | YouTubeTarget>;
}

const PlayerControls: FC<IPlayerControls> = ({ playerRef }) => {
  const dispatch = useAppDispatch();
  const [isPlayed, setPlayed] = useState<boolean>(false);
  const [playerVolume, setPlayerVolume] = useState<number>(
    Number(localStorage.getItem('volume')) ||
      playerRef.current?.getVolume() ||
      10,
  );
  const oldVolume = useRef<number>(playerVolume);

  useEffect(() => {
    if (History.previousRoute === '/') {
      setPlayed(true);
    }
  }, []);

  useEffect(() => {
    if (null !== playerRef.current) {
      try {
        playerRef.current.setVolume(playerVolume);
        localStorage.setItem('volume', playerVolume + '');
      } catch (e) {
        console.log(e);
      }
    }
  }, [playerVolume]);

  const handleVideoState = () => {
    if (isPlayed) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setPlayed(!isPlayed);
  };

  const onVolumeButtonClick = () => {
    if (playerVolume) {
      oldVolume.current = playerVolume;
      setPlayerVolume(0);
    } else {
      setPlayerVolume(oldVolume.current);
      oldVolume.current = playerVolume;
    }
  };

  const onTitleButtonClick = () => {
    const notificationElement = (
      <>
        <span>{playerRef.current?.getVideoData().title}</span>
        <span style={{ color: 'green' }}>(Copied to your clipboard)</span>
      </>
    );
    dispatch(setNotificationText(notificationElement));
    navigator.clipboard.writeText(playerRef.current?.getVideoData().title);
  };

  const onPlayerVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerVolume(e.target.valueAsNumber);
  };

  let volumeIcon;

  if (playerVolume === 0) {
    volumeIcon = <IoMdVolumeMute />;
  } else if (playerVolume < 50) {
    volumeIcon = <IoMdVolumeLow />;
  } else {
    volumeIcon = <IoMdVolumeHigh />;
  }

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
      <button onClick={onTitleButtonClick} className={cl.trackTitleButton}>
        <BiHelpCircle />
      </button>
      <div className={cl.volumeControlContainer}>
        <button onClick={onVolumeButtonClick} className={cl.volumeButton}>
          {volumeIcon}
        </button>
        <input
          className={cl.volumeInput}
          type="range"
          value={playerVolume}
          min={0}
          max={100}
          onChange={onPlayerVolumeChange}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
