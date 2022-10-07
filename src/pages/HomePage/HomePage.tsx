import React from 'react';
import cl from './HomePage.module.scss';
import Routing from '@/components/Routing';
import Header from '@/components/Header';

const HomePage = () => {
  return (
    <div className={cl.homePage}>
      <div className={cl.container}>
        <Header />
        <div className={cl.pageContainer}>
          <Routing />
        </div>
      </div>
    </div>
  );
};

export default HomePage;