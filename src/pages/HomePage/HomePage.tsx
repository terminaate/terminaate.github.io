import React from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './HomePage.module.scss';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';
import CodeFragment from '@/components/CodeFragment';

const code = `const terminaate = new TERMINAATE();
const b = 1;`;
const HomePage = () => {
  return (
    <PageContainer className={cl.homePage}>
      <div className={cl.nameContainer}>
        <CodeFragment text={code} />
        <AnimatedSymbolsText
          delayAnim={600}
          tag={'h1'}
          text={'Bahram_Itkulov'}
          className={cl.name}
        />
        <AnimatedSymbolsText delayAnim={600} text={''} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
