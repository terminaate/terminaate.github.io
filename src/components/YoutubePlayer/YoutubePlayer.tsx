import React, { FC, MutableRefObject, useRef } from 'react';
import cl from './YoutubePlayer.module.scss';
import YouTube from 'react-youtube';
import YouTubeProps, { YouTubePlayer as YouTubeTarget } from 'react-youtube';

interface IYoutubePlayer {
  playerRef: MutableRefObject<null | YouTubeTarget>;
}

const YoutubePlayer: FC<IYoutubePlayer> = ({ playerRef }) => {
  // Todo add backend for this
  const videos = useRef(['ZiADuDjueJc', 'FzpJl-i7ZRg']);
  const videoId = useRef(
    videos.current[Math.floor(Math.random() * videos.current.length)],
  );

  const onReady: YouTubeProps['onPlayerReady'] = (e) => {
    playerRef.current = e.target;
    if (window.previousRoute === '/') {
      e.target.playVideo();
    }
    e.target.setVolume(10);
  };

  return (
    <div className={cl.backgroundVideoContainer}>
      <YouTube
        onReady={onReady}
        opts={{
          height: '100%',
          width: '100%',
          opts: {
            autoplay: window.previousRoute === '/' ? 1 : 0,
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
      />
    </div>
  );
};

export default YoutubePlayer;
