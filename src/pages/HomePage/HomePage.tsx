import React from 'react';
import PageContainer from '@/components/PageContainer';
import MouseHover from '@/components/MouseHover';

const HomePage = () => {
  return (
    <PageContainer>
      <MouseHover text={"This is home page text"}>
        Home page
      </MouseHover>
    </PageContainer>
  );
};

export default HomePage;
