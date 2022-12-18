import React from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './AboutPage.module.scss';
import Title from '@/components/Title';
import ProjectCard from '@/components/ProjectCard';
import MouseHover from '@/components/MouseHover';
import { projects } from '@/data';
import Link from '@/components/Link';
import { FaArrowRight } from 'react-icons/all';

const AboutPage = () => {
  return (
    <PageContainer className={cl.aboutPage}>
      <MouseHover text={'My name is...'} position={'bottom'}>
        <Title className={cl.username}>BAHRAM TERMINAATE</Title>
      </MouseHover>
      {/*<h1>Overview:</h1>*/}
      <div className={cl.contentContainer}>
        <h2 className={cl.title}>About me:</h2>
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
        <h2 className={cl.title}>Latest projects: </h2>
        <div className={cl.projectsContainer}>
          <ProjectCard project={projects[0]} />
          <MouseHover text={'More projects...'}>
            <Link href={'ProjectsPage'} className={cl.projectsLink}>
              <FaArrowRight />
            </Link>
          </MouseHover>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
