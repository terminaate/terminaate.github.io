import { motion } from 'framer-motion';
import React, { FC, ReactNode, useRef } from 'react';
import classNames from 'classnames';
import cl from './BasicPage.module.scss';
import Header from '@/components/Header';
import YoutubePlayer from '@/components/YoutubePlayer';
import { YouTubePlayer as YouTubeTarget } from 'react-youtube';
import PlayerControls from '../PlayerControls';

interface IBasicPage {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  header?: boolean;
  container?: boolean;
  backgroundVideo?: boolean;
  videoControls?: boolean;
}

const BasicPage: FC<IBasicPage> = ({
  children,
  className,
  containerClassName,
  container = false,
  header = false,
  backgroundVideo = false,
}) => {
  const playerRef = useRef<null | YouTubeTarget>(null);

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      className={classNames(cl.basicPage, className!)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {header && <Header />}
      {container ? (
        <div className={classNames(cl.container, containerClassName!)}>
          {children}
        </div>
      ) : (
        children
      )}
      {backgroundVideo && (
        <>
          <YoutubePlayer playerRef={playerRef} />
          <PlayerControls playerRef={playerRef} />
        </>
      )}
    </motion.div>
  );
};

export default BasicPage;
