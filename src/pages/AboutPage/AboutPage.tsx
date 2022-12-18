import React from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './AboutPage.module.scss';
import Title from '@/components/Title';

const AboutPage = () => {
  return (
    <PageContainer className={cl.aboutPage}>
      <Title containerClassName={cl.usernameContainer} className={cl.username}>
        BAHRAM TERMINAATE
      </Title>
    </PageContainer>
  );
};

export default AboutPage;
