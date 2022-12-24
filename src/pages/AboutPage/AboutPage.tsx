import React from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './AboutPage.module.scss';
import Title from '@/components/Title';
import ProjectCard from '@/components/ProjectCard';
import MouseHover from '@/components/MouseHover';
import { projects, skills } from '@/data';
import Link from '@/components/Link';
import { HiOutlineArrowRight } from 'react-icons/all';

const AboutPage = () => {
  return (
    <PageContainer className={cl.aboutPage}>
      <MouseHover
        className={cl.usernameContainer}
        text={'My name is...'}
        position={'bottom'}
      >
        <Title containerClassName={cl.username}>BAHRAM TERMINAATE</Title>
      </MouseHover>
      <div className={cl.contentContainer}>
        <Title className={cl.title}>About me:</Title>
        <MouseHover>
          <p className={cl.text}>
            I'm a <span>young web developer</span> living in <span>Russia</span>
            , I devote most of my time to <span>developing</span> my own small
            projects and <span>self-improvement</span>, I have been doing web
            development for about <span>2 years</span>, during this time I tried{' '}
            <span>Frontend</span> and <span>Backend</span> directions, I write
            Backend completely only on Node. js (Nest/Express), in the Frontend
            area I have quite a lot of experience in writing React applications,
            so now I position myself as a <span>React frontend developer</span>
          </p>
        </MouseHover>
      </div>
      <div className={cl.contentContainer}>
        <Title className={cl.title}>Latest projects: </Title>
        <div className={cl.projectsContainer}>
          <ProjectCard project={projects[0]} />
          <MouseHover text={'More projects...'}>
            <Link href={'ProjectsPage'} className={cl.projectsLink}>
              <HiOutlineArrowRight />
            </Link>
          </MouseHover>
        </div>
      </div>
      <div className={cl.contentContainer}>
        <Title className={cl.title}>Skills:</Title>
        <ul className={cl.skills}>
          {skills.map((skill, key) => (
            <li key={key} className={cl.skillContainer}>
              <Title className={cl.title}>{skill.title}</Title>
              <ul className={cl.skillContents}>
                {skill.content.map((skillContent, key) => (
                  <li className={cl.skillContent} key={key}>
                    {skillContent.icon ? skillContent.icon : null}
                    <span>{skillContent.title}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  );
};

export default AboutPage;