import React, { FC } from 'react';
import cl from './HomePage.module.scss';
import BasicPage from '@/components/BasicPage';

const HomePage: FC = () => {
  return (
    <BasicPage header={true} container={true} className={cl.homePage}>
      Currently home page is blank ¯\_(ツ)_/¯
    </BasicPage>
  );
};

export default HomePage;
