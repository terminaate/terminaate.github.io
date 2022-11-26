import React, { FC, memo, MutableRefObject, useRef } from 'react';
import cl from './YoutubePlayer.module.scss';
import YouTube from 'react-youtube';
import YouTubeProps, { YouTubePlayer as YouTubeTarget } from 'react-youtube';

interface IYoutubePlayer {
  playerRef: MutableRefObject<null | YouTubeTarget>;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const YoutubePlayer: FC<IYoutubePlayer> = ({ playerRef, state, setState }) => {
  // Todo add backend for this
  const videoId = useRef('FzpJl-i7ZRg');

  const onReady: YouTubeProps['onPlayerReady'] = (e) => {
    playerRef.current = e.target;
    e.target.setVolume(10);
  };

  return (
    <div className={cl.backgroundVideoContainer}>
      <div data-played={state} className={cl.videoSplash} />
      <YouTube
        onReady={onReady}
        opts={{
          height: '100%',
          width: '100%',
          opts: {
            autoplay: true,
            controls: 0,
            disablekb: 1,
            loop: 1,
            modestbranding: 1,
            showinfo: 0,
          },
        }}
        onEnd={(e) => e.target.playVideo()}
        className={cl.video}
        videoId={videoId.current}
        onPlay={() => setState(true)}
        onPause={() => setState(false)}
      />
    </div>
  );
};

export default memo(YoutubePlayer);
