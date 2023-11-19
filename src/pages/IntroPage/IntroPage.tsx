import { useCallback, useEffect, useRef } from 'react';
import { PageContainer } from '@/components/PageContainer';
import cl from './IntroPage.module.scss';
import { TypingText } from '@/components/TypingText';
import { Particles } from '@/components/Particles';
import { FaPlay } from 'react-icons/all';
import { MouseHover } from '@/components/MouseHover';
import { Link } from '@/components/UI/Link';
import { useRoutingActions } from '@/contexts/RoutingContext/hooks/useRoutingActions';

const introPageText =
  "Hello world 1000 , my name is Terminaate(nickname) 1000 , i'm a Frontend React developer 1000 , let me show you little bit more information about me.";

export const IntroPage = () => {
  const { setCurrentPage: navigate } = useRoutingActions();
  const timeoutId = useRef<number>(0);

  const navigateToHome = useCallback(() => {
    timeoutId.current = setTimeout(() => {
      navigate('AboutPage');
    }, 2500);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <PageContainer className={cl.introPage}>
      <Particles
        className={cl.backgroundParticles}
        width={'100%'}
        height={'100%'}
      />
      <TypingText
        defaultDelay={400}
        onEnd={navigateToHome}
        className={cl.typingText}
        containerClassName={cl.typingTextContainer}
        text={introPageText}
      />
      <MouseHover text={'Skip'} position={'top'}>
        <Link
          href={'AboutPage'}
          onClick={() => clearTimeout(timeoutId.current)}
        >
          <button className={cl.skipButton}>
            <FaPlay />
          </button>
        </Link>
      </MouseHover>
    </PageContainer>
  );
};
