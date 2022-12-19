import React from 'react';
import cl from './ProjectsPage.module.scss';
import PageContainer from '@/components/PageContainer';
import Title from '@/components/Title';

const ProjectsPage = () => {
  return (
    <PageContainer className={cl.projectsPage}>
      <Title>Projects:</Title>
    </PageContainer>
  );
};

export default ProjectsPage;
