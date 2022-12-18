import React from 'react';
import Routing from '@/components/Routing';
import Cursor from '@/components/Cursor';
import DevToolsModal from '@/components/DevToolsModal';

const App = () => {
  return (
    <>
      <Cursor />
      <Routing />
      <DevToolsModal />
    </>
  );
};

export default App;
