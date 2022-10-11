import React, { FC, useEffect } from 'react';
import cl from './App.module.scss';
import Particles from '@/components/Particles';
import Routing from '@/components/Routing';
import Notification from '@/components/Notification';

const App: FC = () => {

  return (
    <>
      <div className={cl.backgroundParticles}>
        <Particles particlesCount={200} />
      </div>
      <Routing />
      <Notification/>
    </>
  );
};

export default App;
