import React from 'react';
import useNavigate from '@/hooks/useNavigate';
import PageContainer from '@/components/PageContainer';
import cl from './IntroPage.module.scss';
import TypingText from '@/components/TypingText';
import Particles from '@/components/Particles';

const introPageText =
  'Hello world, my name is Terminaate, and im professional React developer, let me show you what i have been done.';

const IntroPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    setTimeout(() => {
      navigate('HomePage');
    }, 2500);
  };

  return (
    <PageContainer transition={{ delay: 0 }}>
      <Particles
        className={cl.backgroundParticles}
        width={innerWidth}
        height={innerHeight}
      />
      <TypingText
        defaultDelay={400}
        onEnd={navigateToHome}
        className={cl.typingText}
        containerClassName={cl.typingTextContainer}
        text={introPageText}
      />
    </PageContainer>
  );
};

export default IntroPage;
