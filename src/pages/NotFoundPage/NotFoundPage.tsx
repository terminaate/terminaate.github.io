import React, { FC } from 'react';
import cl from './NotFoundPage.module.scss';
import PageContainer from '@/components/PageContainer';

const NotFoundPage: FC = () => {
  return (
    <PageContainer className={cl.notFoundPage}>
      <div className={cl.container}>
        <span className={cl.notFoundLogo}>404</span>
        <span className={cl.notFoundText}>
          Sry but i cant find page with this path ¯\_(ツ)_/¯
        </span>
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
