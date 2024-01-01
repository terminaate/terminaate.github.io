import { ReactElement } from 'react';
import { SiDiscord, SiGithub, SiGmail, SiTelegram } from 'react-icons/si';

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
    text: 'terminaate',
    icon: <SiDiscord />,
    link: 'https://discord.com/users/925765821937098802',
  },
  {
    text: '@terminaate',
    icon: <SiTelegram />,
    link: 'https://t.me/terminaate',
  },
  {
    text: 'terminaatecorp@gmail.com',
    icon: <SiGmail />,
    link: 'mailto:terminaatecorp@gmail.com',
  },
];
