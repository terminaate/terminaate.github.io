import { ReactElement } from 'react';
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMobx,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedux,
  SiSass,
  SiSequelize,
  SiSqlite,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/all';

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
        title: 'CSS',
        icon: <FaCss3 />,
      },
      {
        title: 'SASS',
        icon: <SiSass />,
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
];
