import { FC, PropsWithChildren, useReducer } from 'react';
import { initialState, RoutingContext } from './RoutingContext';
import { RoutingContextReducer } from './RoutingContextReducer';

export const RoutingContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    RoutingContextReducer,
    initialState.state,
  );

  return (
    <RoutingContext.Provider value={{ state, dispatch }}>
      {children}
    </RoutingContext.Provider>
  );
};
