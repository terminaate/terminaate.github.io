import React, { FC } from 'react';
import Routing from '@/components/Routing';
import Modals from '@/components/Modals';
import Notification from '@/components/Notification';

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
