import NotificationContext from '@/contexts/NotificationContext';
import React, { useCallback } from 'react';
import { NotificationContextState } from '@/utils/NotificationContextState';
import { INotificationContext } from '@/contexts/NotificationContext/NotificationContext';

const NotificationContextSetter = () => {
  const updateState = useCallback((newState: INotificationContext) => {
    NotificationContextState.state = newState.state;
    NotificationContextState.setState = newState.setState;
    return null;
  }, []);

  return (
    <NotificationContext.Consumer>{updateState}</NotificationContext.Consumer>
  );
};

export default NotificationContextSetter;
