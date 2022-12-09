import { SkillProps } from '@/pages/HomePage/data';
import React, { FC, ReactNode } from 'react';
import cl from '@/pages/HomePage/HomePage.module.scss';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';

interface ISkill extends SkillProps {
  children: ReactNode;
}

const Skill: FC<ISkill> = ({ title, children }) => {
  return (
    <li className={cl.skill}>
      <AnimatedSymbolsText
        className={cl.subTitle}
        text={title}
        animateOnVisible={true}
      />
      <ul className={cl.skillContents}>{children}</ul>
    </li>
  );
};

export default Skill;
