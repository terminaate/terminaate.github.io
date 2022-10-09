import React, { FC } from 'react';
import cl from './HomePage.module.scss';
import BasicPage from '@/components/BasicPage';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
      <BasicPage className={cl.homePage}>
        <Header />
        <div className={cl.container}>

        </div>
      </BasicPage>
  );
};

export default HomePage;