import React, { FC } from 'react';
import cl from './NotFoundPage.module.scss';
import BasicPage from '@/components/BasicPage';

const NotFoundPage: FC = () => {
  return (
    <BasicPage header={true} container={true} className={cl.notFoundPage}>
      Sry but i cant find page with this path ¯\_(ツ)_/¯
    </BasicPage>
  );
};

export default NotFoundPage;
