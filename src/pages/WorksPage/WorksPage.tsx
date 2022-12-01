import React from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './WorksPage.module.scss';

const WorksPage = () => {
  return (
    <PageContainer className={cl.worksPage}>
      <div className={cl.container}>Works page</div>
    </PageContainer>
  );
};

export default WorksPage;
