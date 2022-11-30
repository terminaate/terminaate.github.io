import React, { FC } from 'react';
import cl from './NotFoundPage.module.scss';
import PageContainer from '@/components/PageContainer';

const NotFoundPage: FC = () => {
  return (
    <PageContainer className={cl.notFoundContainer}>
      Sry but i cant find page with this path ¯\_(ツ)_/¯
    </PageContainer>
  );
};

export default NotFoundPage;
