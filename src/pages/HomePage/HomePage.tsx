import React, { FC } from 'react';
import cl from './HomePage.module.scss';
import BasicPage from '@/components/BasicPage';

const HomePage: FC = () => {
  return (
    <BasicPage
      backgroundVideo={true}
      header={true}
      container={true}
      className={cl.homePage}
    >
      Currently in home page is blank ¯\_(ツ)_/¯
    </BasicPage>
  );
};

export default HomePage;
