import React, { ReactElement } from 'react';
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  FaVuejs,
  SiDiscord,
  SiElectron,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGmail,
  SiGulp,
  SiJavascript,
  SiJquery,
  SiLess,
  SiLinux,
  SiMobx,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPug,
  SiRedux,
  SiSass,
  SiSequelize,
  SiSqlite,
  SiTelegram,
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/all';

export type ProjectProps = {
  image: string;
  title: string;
  githubLink?: string;
  link?: string;
  description: string;
  tags: string[];
};

export const projects: ProjectProps[] = [
  {
    githubLink: 'https://github.com/terminaate/mesto',
    title: 'Mesto',
    description:
      "Mesto is a my personal social network, it's currently in full development so it doesn't work at the moment, basically I need to rewrite most of the code for this social network as it's not extensible at the moment, and there are still a bunch of ideas that I would like to to implement in it.",
    image: 'https://i.imgur.com/xVa8oD0.png',
    tags: [
      'React',
      'Typescript',
      'Framer motion',
      'Redux toolkit',
      'Axios',
      'Nest',
      'Mongodb',
      'Passportjs',
      'JWT',
    ],
  },
  {
    githubLink: 'https://github.com/terminaate/lonely-chat',
    link: 'https://terminaate.github.io/lonely-chat',
    title: 'Lonely chat',
    description:
      'Lonely Chat is a test project for the Frontend Production company, in general it is just a local chat, the messages of which are stored in the local storage, you open two tabs, enter your nickname, which will be stored in the tab, and start chatting between browser tabs (that is, with the yourself) messages are updated in real time.',
    image: 'https://i.imgur.com/DCfvpSd.png',
    tags: [
      'React',
      'Typescript',
      'Redux toolkit',
      'Bootstrap',
      'Local storage',
      'Session storage',
    ],
  },
  {
    githubLink: 'https://github.com/terminaate/contacts-app',
    title: 'Contacts app',
    description:
      'The "Contacts" application is a test project for a company whose name I forgot, this is a regular CRUD application with a fictitious server (json server) and an authorization system, on this site you can log in / register, as well as create, read, update and delete contacts, and you can add photos to them.',
    image: 'https://i.imgur.com/NNkIPDR.png',
    tags: [
      'React',
      'Typescript',
      'Redux toolkit',
      'MUI',
      'Axios',
      'Json server',
    ],
  },
  {
    githubLink: 'https://github.com/terminaate/old-site',
    link: 'https://terminaate.github.io/old-site',
    title: 'Old personal site',
    description:
      "This is my old version of my personal site, it doesn't have a lot of functionality, but everything that is written there is only using vanilla React, i.e. I didn’t use any libraries other than React, And by the way, there is a system for dragging and dropping modal windows",
    image: 'https://i.imgur.com/u8lC2HY.png',
    tags: ['React', 'Typescript'],
  },
  {
    githubLink: 'https://github.com/terminaate/canvas-particles',
    link: 'https://terminaate.github.io/canvas-particles',
    title: 'Canvas particles',
    description:
      'The canvas particles are just for testing my canvas skills and just for fun. You can deeply tune the particles in real time. Written in vanilla Typescript.',
    image: 'https://i.imgur.com/eV4hcph.png',
    tags: ['Typescript', 'Canvas', 'HTML', 'CSS'],
  },
  {
    githubLink: 'https://github.com/terminaate/starry_sky',
    link: 'https://terminaate.github.io/starry_sky',
    title: 'Starry sky',
    description:
      "Starry Sky is one of my first experiences with canvas, it's just a full screen canvas with randomly generated dots. Written in vanilla Javascript.",
    image: 'https://i.imgur.com/oHGshRv.png',
    tags: ['Javascript', 'Canvas', 'HTML', 'CSS'],
  },
];

export type SkillContentProps = {
  title: string;
  icon?: ReactElement;
};

export type SkillProps = {
  title: string;
  content: SkillContentProps[];
};

export const skills: SkillProps[] = [
  {
    title: 'Frontend:',
    content: [
      {
        title: 'HTML',
        icon: <FaHtml5 />,
      },
      {
        title: 'PUG',
        icon: <SiPug />,
      },
      {
        title: 'CSS',
        icon: <FaCss3 />,
      },
      {
        title: 'SASS',
        icon: <SiSass />,
      },
      {
        title: 'LESS',
        icon: <SiLess />,
      },
      {
        title: 'Bootstrap',
        icon: <FaBootstrap />,
      },
      {
        title: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        title: 'Jquery',
        icon: <SiJquery />,
      },
      {
        title: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        title: 'Vite',
        icon: <SiVite />,
      },
      {
        title: 'Webpack',
        icon: <SiWebpack />,
      },
      {
        title: 'Gulp',
        icon: <SiGulp />,
      },
      {
        title: 'React',
        icon: <FaReact />,
      },
      {
        title: 'Redux',
        icon: <SiRedux />,
      },
      {
        title: 'Mobx',
        icon: <SiMobx />,
      },
      {
        title: 'Next',
        icon: <SiNextdotjs />,
      },
      {
        title: 'Vue',
        icon: <FaVuejs />,
      },
      {
        title: 'Three',
        icon: <SiThreedotjs />,
      },
      {
        title: 'Framer motion',
        icon: <SiFramer />,
      },
    ],
  },
  {
    title: 'Backend:',
    content: [
      {
        title: 'Node.js',
        icon: <SiNodedotjs />,
      },
      {
        title: 'Express.js',
        icon: <SiExpress />,
      },
      {
        title: 'Nest.js',
        icon: <SiNestjs />,
      },
      {
        title: 'Electron.js',
        icon: <SiElectron />,
      },
    ],
  },
  {
    title: 'Databases:',
    content: [
      {
        title: 'Mongodb',
        icon: <SiMongodb />,
      },
      {
        title: 'Sqlite3',
        icon: <SiSqlite />,
      },
      {
        title: 'Postgresql',
        icon: <SiPostgresql />,
      },
      // {
      //   title: 'Mysql',
      //   icon: <SiMysql />,
      // },
    ],
  },
  {
    title: "ORM's:",
    content: [
      {
        title: 'Sequelize',
        icon: <SiSequelize />,
      },
      {
        title: 'Mongoose',
        icon: <SiMongodb />,
      },
    ],
  },
  {
    title: 'Principles:',
    content: [
      {
        title: 'SOLID',
      },
      {
        title: 'DRY',
      },
      {
        title: 'KISS',
      },
      {
        title: 'YAGNI',
      },
    ],
  },
  {
    title: 'Devops:',
    content: [
      {
        title: 'Git',
        icon: <SiGit />,
      },
      {
        title: 'Github',
        icon: <SiGithub />,
      },
      // {
      //   title: 'Docker',
      //   icon: <SiDocker />,
      // },
      {
        title: 'CI/CD (Github actions)',
        icon: <SiGithubactions />,
      },
      {
        title: 'Linux',
        icon: <SiLinux />,
      },
      {
        title: 'Nginx',
        icon: <SiNginx />,
      },
    ],
  },
];

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
