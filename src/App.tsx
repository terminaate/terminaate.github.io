import React, { FC } from 'react';
import Routing from '@/components/Routing';
import Notification from '@/components/Notification';
import Modals from '@/components/Modals';
import Particles from '@/components/Particles';

const App: FC = () => {
  return (
    <>
      {/*<Particles particlesCount={200} particlesSize={1.5} />*/}
      <Routing />
      <Notification />
      <Modals />
    </>
  );
};

export default App;
