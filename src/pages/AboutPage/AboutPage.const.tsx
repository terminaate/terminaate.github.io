import { ReactElement } from 'react';
import {
  SiFramer,
  SiJavascript,
  SiMobx,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/si';
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from 'react-icons/fa';

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
