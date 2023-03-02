import { ReactElement } from 'react';
import { SiDiscord, SiGithub, SiGmail, SiTelegram } from 'react-icons/all';

export type ContactProps = {
  icon: ReactElement;
  text: string;
  link: string;
};

export const contacts: ContactProps[] = [
  {
    text: '@Terminaate',
    icon: <SiGithub />,
    link: 'https://github.com/terminaate',
  },
  {
    text: 'Terminaate#9274',
    icon: <SiDiscord />,
    link: 'https://discord.com/users/925765821937098802',
  },
  {
    text: '@terminaate',
    icon: <SiTelegram />,
    link: 'https://t.me/terminaate',
  },
  {
    text: 'tntwnik@gmail.com',
    icon: <SiGmail />,
    link: 'mailto:tntwnik@gmail.com',
  },
];
