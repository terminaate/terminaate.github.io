import cl from './ProjectsPage.module.scss';
import { PageContainer } from '@/components/PageContainer';
import { Title } from '@/components/Title';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from './ProjectsPage.const';

const ProjectsPage = () => {
  return (
    <PageContainer className={cl.projectsPage}>
      <Title>Projects:</Title>
      <div className={cl.container}>
        {projects.map((project, key) => (
          <ProjectCard
            className={cl.projectContainer}
            project={project}
            key={key}
          />
        ))}
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
