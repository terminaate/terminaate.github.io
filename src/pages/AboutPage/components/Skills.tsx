import { MouseHover } from '@/components/MouseHover';
import { Title } from '@/components/Title';
import cl from '@/pages/AboutPage/AboutPage.module.scss';
import { SkillProps, skills } from '@/pages/AboutPage/AboutPage.const';
import { FC } from 'react';

const Skill: FC<SkillProps> = ({ title, content }) => {
  return (
    <li className={cl.skillContainer}>
      <Title className={cl.title}>{title}</Title>
      <ul className={cl.skillContents}>
        {content.map((skillContent, key) => (
          <li className={cl.skillContent} key={key}>
            {skillContent.icon ? skillContent.icon : null}
            <span>{skillContent.title}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export const Skills = () => {
  return (
    <>
      <MouseHover>
        <Title className={cl.title}>Skills:</Title>
      </MouseHover>
      <ul className={cl.skills}>
        {skills.map((skill, key) => (
          <Skill key={key} {...skill} />
        ))}
      </ul>
    </>
  );
};
