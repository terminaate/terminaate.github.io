import React, { useEffect, useLayoutEffect, useRef } from 'react';
import cl from './IntroPage.module.scss';
import TypingText from '@/components/TypingText';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BasicPage from '@/components/BasicPage';
import { useTranslation } from 'react-i18next';

const IntroPage = () => {
  const visited = useRef<boolean>(Boolean(Math.floor(Math.random() * 2)));
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {
    t,
    i18n: { language: lang },
  } = useTranslation('intro');

  useLayoutEffect(() => {
    if (localStorage.getItem('visited') === null) {
      visited.current = false;
      localStorage.setItem('visited', true + '');
    }
  }, []);

  useEffect(() => {
    addEventListener('mousemove', onMouseMoveEventHandler);

    return () => removeEventListener('mousemove', onMouseMoveEventHandler);
  }, []);

  const skipButtonClickHandler = () => {
    navigate('/home');
  };

  const onMouseMoveEventHandler = (e: MouseEvent) => {
    if (null !== containerRef.current) {
      containerRef.current.style.transform = `translate(${
        (window.innerWidth - e.pageX * 1.4) / 90
      }px, ${(window.innerHeight - e.pageY * 1.4) / 90}px)`;
    }
  };

  const onTypingTextClick = (
    e: React.MouseEvent<HTMLElement> & { target: HTMLElement },
  ) => {
    e.target.style.background = 'none';
  };

  return (
    <BasicPage className={cl.introScreen}>
      <div className={cl.container}>
        <motion.div ref={containerRef} className={cl.introScreenContainer}>
          <TypingText
            onClick={onTypingTextClick}
            className={visited.current ? cl.introTypingVisitedText : ''}
            text={t('intro_main')!}
          />
          <div onClick={skipButtonClickHandler} className={cl.introSkipButton}>
            <motion.span exit={{ marginRight: '15px' }}>-</motion.span>
            <span>{t('intro_skip')}</span>
          </div>
        </motion.div>
      </div>
    </BasicPage>
  );
};

export default IntroPage;
