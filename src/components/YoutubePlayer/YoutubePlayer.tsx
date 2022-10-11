import React, { FC, MutableRefObject, useRef } from 'react';
import cl from './YoutubePlayer.module.scss';
import YouTube from 'react-youtube';
import YouTubeProps, { YouTubePlayer as YouTubeTarget } from 'react-youtube';

interface IYoutubePlayer {
  playerRef: MutableRefObject<null | YouTubeTarget>;
}

const YoutubePlayer: FC<IYoutubePlayer> = ({ playerRef }) => {
  // Todo add backend for this
  const videos = useRef(['ZiADuDjueJc']);
  const videoId = useRef(videos.current[Math.floor(Math.random() * videos.current.length)]);

  const onReady: YouTubeProps['onPlayerReady'] = (e) => {
    playerRef.current = e.target;
    e.target.playVideo()
    e.target.setVolume(10)
  };

  return (
    <div className={cl.backgroundVideoContainer}>
      <YouTube onReady={onReady} opts={{
        height: '100%',
        width: '100%',
        opts: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          loop: 1,
          modestbranding: 1,
          showinfo: 0
        },
      }} className={cl.video} videoId={videoId.current} />
    </div>
  )
};

export default YoutubePlayer;