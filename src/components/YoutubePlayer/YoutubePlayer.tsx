// noinspection SpellCheckingInspection

import React, { FC, memo, MutableRefObject, useEffect, useRef, useState } from 'react';
import cl from './YoutubePlayer.module.scss';
import YouTube from 'react-youtube';
import YouTubeProps, { YouTubePlayer as YouTubeTarget } from 'react-youtube';
import { History } from '@/utils/history';

interface IYoutubePlayer {
  playerRef: MutableRefObject<null | YouTubeTarget>;
}

const YoutubePlayer: FC<IYoutubePlayer> = ({ playerRef }) => {
  // Todo add backend for this
  const videos = useRef(['ZiADuDjueJc', 'FzpJl-i7ZRg']);
  const videoId = useRef(
    videos.current[Math.floor(Math.random() * videos.current.length)],
  );
  const isLastRouteIntro = useRef<boolean>(false);
  const [played, setPlayed] = useState<boolean>(false);

  useEffect(() => {
    isLastRouteIntro.current = History.previousRoute === '/';
  }, []);

  const onReady: YouTubeProps['onPlayerReady'] = (e) => {
    playerRef.current = e.target;
    if (isLastRouteIntro.current) {
      e.target.playVideo();
    }
    e.target.setVolume(10);
  };

  return (
    <div className={cl.backgroundVideoContainer}>
      <div data-played={played} className={cl.videoSplash} />
      <YouTube
        onReady={onReady}
        opts={{
          height: '100%',
          width: '100%',
          opts: {
            autoplay: isLastRouteIntro.current ? 1 : 0,
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
        onPlay={() => setPlayed(true)}
        onPause={() => setPlayed(false)}
      />
    </div>
  );
};

export default memo(YoutubePlayer);
