import React, { FC } from 'react';
import cl from './NotFoundPage.module.scss';
import BasicPage from '@/components/BasicPage';
import PageContainer from '@/components/PageContainer';

const NotFoundPage: FC = () => {
  return (
    <PageContainer className={cl.notFoundPage}>
      Sry but i cant find page with this path ¯\_(ツ)_/¯
    </PageContainer>
  );
};

export default NotFoundPage;
