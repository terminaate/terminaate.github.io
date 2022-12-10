import React, { FC, ReactNode, useState } from 'react';
import NotificationContext, {
  INotificationContext,
} from './NotificationContext';

interface INotificationContextProvider {
  children: ReactNode;
}

export const NotificationContextProvider: FC<INotificationContextProvider> = ({
  children,
}) => {
  const [state, setState] = useState<INotificationContext['state']>({
    text: '',
    timeout: 1000,
  });

  const setNewState = (newState: Partial<INotificationContext['state']>) => {
    setState({ ...state, ...newState });
  };

  return (
    <NotificationContext.Provider
      value={{
        state,
        setState: setNewState,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
