import store from '@/store';
import React, { MouseEventHandler, ReactElement } from 'react';
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  FaVuejs,
  SiDiscord,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGulp,
  SiJavascript,
  SiJquery,
  SiLess,
  SiLinux,
  SiMobx,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPug,
  SiRedux,
  SiRollupdotjs,
  SiSass,
  SiSequelize,
  SiSqlite,
  SiTelegram,
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/all';
import { setNotificationText } from '@/store/reducers/notificationSlice';

export type SkillProps = {
  title: string;
  content: Array<{
    text: string;
    icon?: ReactElement;
  }>;
};

export const skills: SkillProps[] = [
  {
    title: '//Frontend',
    content: [
      {
        text: 'HTML',
        icon: <FaHtml5 />,
      },
      {
        text: 'PUG',
        icon: <SiPug />,
      },
      {
        text: 'CSS',
        icon: <FaCss3 />,
      },
      {
        text: 'SASS',
        icon: <SiSass />,
      },
      {
        text: 'LESS',
        icon: <SiLess />,
      },
      {
        text: 'Bootstrap',
        icon: <FaBootstrap />,
      },
      {
        text: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        text: 'Jquery',
        icon: <SiJquery />,
      },
      {
        text: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        text: 'Vite',
        icon: <SiVite />,
      },
      {
        text: 'Webpack',
        icon: <SiWebpack />,
      },
      {
        text: 'Rollup',
        icon: <SiRollupdotjs />,
      },
      {
        text: 'Gulp',
        icon: <SiGulp />,
      },
      {
        text: 'React',
        icon: <FaReact />,
      },
      {
        text: 'Redux',
        icon: <SiRedux />,
      },
      {
        text: 'Mobx',
        icon: <SiMobx />,
      },
      {
        text: 'Next',
        icon: <SiNextdotjs />,
      },
      {
        text: 'Vue',
        icon: <FaVuejs />,
      },
      {
        text: 'Three',
        icon: <SiThreedotjs />,
      },
      {
        text: 'Framer motion',
        icon: <SiFramer />,
      },
    ],
  },
  {
    title: '//Backend',
    content: [
      {
        text: 'Node.js',
        icon: <SiNodedotjs />,
      },
      {
        text: 'Express.js',
        icon: <SiExpress />,
      },
      {
        text: 'Nest.js',
        icon: <SiNestjs />,
      },
      {
        text: 'Electron.js',
        icon: <SiElectron />,
      },
    ],
  },
  {
    title: '//Databases',
    content: [
      {
        text: 'Mongodb',
        icon: <SiMongodb />,
      },
      {
        text: 'Sqlite3',
        icon: <SiSqlite />,
      },
      {
        text: 'Postgresql',
        icon: <SiPostgresql />,
      },
      {
        text: 'Mysql',
        icon: <SiMysql />,
      },
    ],
  },
  {
    title: '//ORM\'s',
    content: [
      {
        text: 'Sequelize',
        icon: <SiSequelize />,
      },
      {
        text: 'Mongoose',
        icon: <SiMongodb />,
      },
    ],
  },
  {
    title: '//Principles',
    content: [
      {
        text: 'SOLID',
      },
      {
        text: 'DRY',
      },
      {
        text: 'KISS',
      },
      {
        text: 'YAGNI',
      },
    ],
  },
  {
    title: '//Devops',
    content: [
      {
        text: 'Git',
        icon: <SiGit />,
      },
      {
        text: 'Github',
        icon: <SiGithub />,
      },
      {
        text: 'Docker',
        icon: <SiDocker />,
      },
      {
        text: 'CI/CD (Github actions)',
        icon: <SiGithubactions />,
      },
      {
        text: 'Linux',
        icon: <SiLinux />,
      },
    ],
  },
];

type ContactProps = {
  icon: ReactElement;
  text: string;
  link?: string;
  onClick?: MouseEventHandler;
}

export const contacts: ContactProps[] = [
  {
    text: '@Terminaate',
    link: 'https://github.com/terminaate',
    icon: <SiGithub />,
  },
  {
    text: 'Terminaate#9274',
    icon: <SiDiscord />,
    onClick: function(e) {
      e.preventDefault();
      navigator.clipboard.writeText('Terminaate#9274').then(() => {
        store.dispatch(setNotificationText('Discord tag copied to clipboard!'));
      });
    },
  },
  {
    text: '@terminaate',
    icon: <SiTelegram />,
    link: 'https://t.me/terminaate',
  },

];