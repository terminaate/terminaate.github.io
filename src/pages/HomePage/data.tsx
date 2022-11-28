import React, { ReactElement } from 'react';
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  FaVuejs,
  SiElectron,
  SiExpress,
  SiFramer,
  SiGulp,
  SiJavascript,
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
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/all';

export type SkillProps = {
  title: string;
  content: Array<{
    text: string;
    icon?: JSX.Element;
  }>;
};

export const skills: SkillProps[] = [
  {
    title: 'Frontend',
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
        text: 'Bootstrap',
        icon: <FaBootstrap />,
      },
      {
        text: 'Javascript',
        icon: <SiJavascript />,
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
    title: 'Backend',
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
        text: 'Electron',
        icon: <SiElectron />,
      },
    ],
  },
  {
    title: 'Databases',
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
    title: 'ORM\'s',
    content: [
      {
        text: 'Sequelize',
        icon: <SiSequelize />,
      },
    ],
  },
  {
    title: 'Principles',
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
];
