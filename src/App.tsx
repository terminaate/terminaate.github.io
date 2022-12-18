import React from 'react';
import Routing from '@/components/Routing';
import Cursor from '@/components/Cursor';
import DevToolsModal from '@/components/DevToolsModal';

const App = () => {
  return (
    <>
      <DevToolsModal />
      <Cursor />
      <Routing />
    </>
  );
};

export default App;
