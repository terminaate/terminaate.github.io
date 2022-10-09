import React, { useEffect, useRef } from 'react';
import cl from './IntroPage.module.scss';
import TypingText from '@/components/TypingText';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BasicPage from '@/components/BasicPage';

const IntroPage = () => {
  const visited = useRef<boolean>(Boolean(Math.floor(Math.random() * 2)));
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    addEventListener('mousemove', onMouseMoveEventHandler);

    return () => removeEventListener('mousemove', onMouseMoveEventHandler);
  }, []);

  const skipButtonClickHandler = () => {
    navigate('/home');
  };

  const onMouseMoveEventHandler = (e: MouseEvent) => {
    containerRef.current!.style.transform = `translate(${(window.innerWidth - e.pageX * 1.4) / 90}px, ${(window.innerHeight - e.pageY * 1.4) / 90}px)`;
  };

  const onTypingTextClick = (e: React.MouseEvent<HTMLElement> & { target: HTMLElement }) => {
    e.target.style.background = 'none';
  };

  return (
    <BasicPage className={cl.introScreen}>
      <div className={cl.container}>
        <div ref={containerRef} className={cl.introScreenContainer}>
          <TypingText
            onClick={onTypingTextClick}
            className={visited.current ? cl.introTypingVisitedText : ''}
            text={'A programmer is a person who writes code and compiles it himself into an executable file, so we are all "script kiddy")'}
          />
          <div onClick={skipButtonClickHandler}
               className={cl.introSkipButton}>
            <motion.span exit={{marginRight: "15px"}}>-</motion.span>
            <span>{visited.current ? 'skip' : 'who.... cares?'}</span>
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default IntroPage;