import React, { ReactElement } from 'react';
import { SiDiscord, SiGithub, SiGmail, SiTelegram } from 'react-icons/all';
import store from '@/store';
import { setNotificationText } from '@/store/reducers/notificationSlice';

export type ContactProps = {
  icon: ReactElement;
  text: string;
  link?: string;
  onClick?: (e: MouseEvent) => void;
};

const copyTextHandler = (text: string, notificationText: string) => {
  return (e: MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(text).then(() => {
      store.dispatch(setNotificationText(notificationText));
    });
  };
};

export const contacts: ContactProps[] = [
  {
    text: '@Terminaate',
    link: 'https://github.com/terminaate',
    icon: <SiGithub />,
  },
  {
    text: 'Terminaate#9274',
    icon: <SiDiscord />,
    onClick: copyTextHandler(
      'Terminaate#9274',
      'Discord tag copied to clipboard!',
    ),
  },
  {
    text: '@terminaate',
    icon: <SiTelegram />,
    link: 'https://t.me/terminaate',
  },
  {
    text: 'tntwnik@gmail.com',
    icon: <SiGmail />,
    onClick: copyTextHandler('tntwnik@gmail.com', 'Email copied to clipboard!'),
  },
];
