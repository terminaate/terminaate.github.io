import React from 'react';
import cl from './MenuPage.module.scss';
import PageContainer from '@/components/PageContainer';

const MenuPage = () => {
  return (
    <PageContainer initial={{y: -1000}} animate={{y: 0}} exit={{y: -1000, transition: {delay: 0, duration: 1.2}}} transition={{duration: 1.2, delay: 1.2}} className={cl.menuPage}>
      Menu page
    </PageContainer>
  );
};

export default MenuPage;