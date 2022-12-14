import React, { useEffect } from 'react';
import useNavigate from '@/hooks/useNavigate';
import PageContainer from '@/components/PageContainer';

const IntroPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('HomePage');
    }, 1500);
  }, []);

  return (
    <PageContainer transition={{delay: 0, duration: 0.6}}>
      Intro page
    </PageContainer>
  );
};

export default IntroPage;
