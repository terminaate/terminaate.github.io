import React, { FC, PropsWithChildren } from 'react';
import { ConfigContextProvider } from '@/contexts/ConfigContext';
import { RoutingContextProvider } from '@/contexts/RoutingContext';
import { CursorContextProvider } from '@/contexts/CursorContext';

const ContextsProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RoutingContextProvider>
      <ConfigContextProvider>
        <CursorContextProvider>{children}</CursorContextProvider>
      </ConfigContextProvider>
    </RoutingContextProvider>
  );
};

export default ContextsProviders;
