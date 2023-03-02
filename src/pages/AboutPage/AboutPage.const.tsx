import { ReactElement } from 'react';
import {
  FaBootstrap,
  FaCss3,
  FaHtml5, FaReact, FaVuejs, SiElectron, SiExpress, SiFramer, SiGit, SiGithub, SiGithubactions, SiGulp,
  SiJavascript,
  SiJquery,
  SiLess, SiLinux, SiMobx, SiMongodb, SiNestjs, SiNextdotjs, SiNginx, SiNodedotjs, SiPostgresql,
  SiPug, SiRedux,
  SiSass, SiSequelize, SiSqlite, SiThreedotjs,
  SiTypescript, SiVite, SiWebpack,
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