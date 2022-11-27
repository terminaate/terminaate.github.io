import React, { ReactElement } from 'react';
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaVuejs,
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPug,
  SiRedux,
  SiSass,
  SiSqlite,
  SiThreedotjs,
  SiTypescript,
} from 'react-icons/all';

type SkillProps = {
  title: string;
  content: Array<{
    text: string;
    icon: ReactElement;
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
        text: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        text: 'Typescript',
        icon: <SiTypescript />,
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
    ],
  },
];
