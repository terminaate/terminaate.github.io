import React, { FC } from 'react';
import Routing from '@/components/Routing';
import Notification from '@/components/Notification';
import Modals from '@/components/Modals';

const App: FC = () => {
  return (
    <>
      <Routing />
      <Notification />
      <Modals />
    </>
  );
};

export default App;
