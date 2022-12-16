import React from 'react';
import useNavigate from '@/hooks/useNavigate';
import PageContainer from '@/components/PageContainer';
import cl from './IntroPage.module.scss';
import TypingText from '@/components/TypingText';
import Particles from '@/components/Particles';
import { FaPlay } from 'react-icons/all';
import MouseHover from '@/components/MouseHover';

const introPageText =
  'Hello 1000 world , my name is 1000 Terminaate , im professional React developer 1000 , let me show you what i have done.';

const IntroPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    setTimeout(() => {
      navigate('HomePage');
    }, 2500);
  };

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
      <MouseHover text={"Skip"} position={"top"}>
        <button className={cl.skipButton} onClick={() => navigate("HomePage")}>
          <FaPlay/>
        </button>
      </MouseHover>
    </PageContainer>
  );
};

export default IntroPage;
