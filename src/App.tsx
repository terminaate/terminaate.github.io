import React, { FC } from 'react';
import Notification from '@/components/Notification';
import { NotificationContextProvider } from '@/contexts/NotificationContext';
import Routing from '@/components/Routing';
import NotificationContextSetter from '@/components/NotificationContextSetter';

const App: FC = () => {
  return (
    <NotificationContextProvider>
      <Routing />
      <Notification />
      <NotificationContextSetter />
    </NotificationContextProvider>
  );
};

export default App;
