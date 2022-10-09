import React, { FC } from 'react';
import cl from './App.module.scss';
import Particles from '@/components/Particles';
import Routing from '@/components/Routing';

const App: FC = () => {
  return (
    <>
      <div className={cl.backgroundParticles}>
        <Particles particlesCount={200} />
      </div>
      <Routing />
    </>
  );
};

export default App;