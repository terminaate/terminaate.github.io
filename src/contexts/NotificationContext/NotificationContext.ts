import { createContext } from 'react';

export interface INotificationContext {
  state: {
    text: string;
    timeout: number;
  };
  setState: (newState: Partial<INotificationContext['state']>) => void;
}

const NotificationContext = createContext<INotificationContext>({
  state: { text: '', timeout: 1000 },
  setState: () => ({}),
});

export default NotificationContext;
