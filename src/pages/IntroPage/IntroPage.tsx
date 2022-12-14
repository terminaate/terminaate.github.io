import React from 'react';
import useNavigate from '@/hooks/useNavigate';
import PageContainer from '@/components/PageContainer';
import TypingText from '@/components/TypingText';

const IntroPage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('HomePage');
  //   }, 1500);
  // }, []);

  const navigateToHome = () => {
    navigate('HomePage');
  };

  return (
    <PageContainer transition={{ delay: 0, duration: 0.6 }}>
      <TypingText defaultDelay={1000} text={'Hello world im terminaate'} />
    </PageContainer>
  );
};

export default IntroPage;
