import React from 'react';
import cl from './LoadingPage.module.scss';
import BasicPage from '@/components/BasicPage';

const LoadingPage = () => {
  return (
    <BasicPage header={true} container={true} containerClassName={cl.container} className={cl.loadingPage}>
      <div className={cl.loader}/>
    </BasicPage>
  );
};

export default LoadingPage;