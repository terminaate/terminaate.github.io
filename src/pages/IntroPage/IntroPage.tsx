import React from 'react';
import useNavigate from '@/hooks/useNavigate';
import PageContainer from '@/components/PageContainer';
import cl from './IntroPage.module.scss';
import TypingText from '@/components/TypingText';

const introPageText =
  'Hello world, 1000 my name is Terminaate, and im professional React developer, let me show you what i have been done.';

const IntroPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    setTimeout(() => {
      navigate('HomePage');
    }, 1500);
  };

  return (
    <PageContainer transition={{ delay: 0 }}>
      <TypingText
        onEnd={navigateToHome}
        className={cl.typingText}
        containerClassName={cl.typingTextContainer}
        text={introPageText}
      />
    </PageContainer>
  );
};

export default IntroPage;
