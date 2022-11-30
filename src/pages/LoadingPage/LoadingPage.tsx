import React from 'react';
import cl from './LoadingPage.module.scss';
import BasicPage from '@/components/BasicPage';
import PageContainer from '@/components/PageContainer';

const LoadingPage = () => {
  return (
    <PageContainer className={cl.loadingPage}>
      <div className={cl.loader} />
    </PageContainer>
  );
};

export default LoadingPage;
