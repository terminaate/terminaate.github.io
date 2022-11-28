import React, { FC } from 'react';
import Routing from '@/components/Routing';
import Notification from '@/components/Notification';
import Modals from '@/components/Modals';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const App: FC = () => {
  return (
    <>
      <LanguageSwitcher />
      <Routing />
      <Notification />
      <Modals />
    </>
  );
};

export default App;
