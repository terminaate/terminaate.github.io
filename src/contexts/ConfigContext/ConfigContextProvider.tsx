import React, { FC, PropsWithChildren, useReducer } from 'react';
import ConfigContext, { initialState } from './ConfigContext';
import { ConfigContextReducer } from './ConfigContextReducer';

export const ConfigContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    ConfigContextReducer,
    initialState.state,
  );

  return (
    <ConfigContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfigContext.Provider>
  );
};
