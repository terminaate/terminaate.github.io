import { INotificationContext } from '@/contexts/NotificationContext/NotificationContext';

export const NotificationContextState: INotificationContext = {
  state: {
    text: '',
    timeout: 1000,
  },
  setState: () => ({}),
};
