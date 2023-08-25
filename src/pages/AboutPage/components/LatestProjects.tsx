import MouseHover from '@/components/MouseHover';
import Title from '@/components/Title';
import cl from '@/pages/AboutPage/AboutPage.module.scss';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/pages/ProjectsPage/ProjectsPage.const';
import Link from '@/components/UI/Link';
import { HiOutlineArrowRight } from 'react-icons/all';

const LatestProjects = () => {
  return (
    <>
      <MouseHover>
        <Title className={cl.title}>Latest projects: </Title>
      </MouseHover>
      <div className={cl.projectsContainer}>
        <ProjectCard project={projects[0]} />
        <MouseHover text={'More projects...'}>
          <Link href={'ProjectsPage'} className={cl.projectsLink}>
            <HiOutlineArrowRight />
          </Link>
        </MouseHover>
      </div>
    </>
  );
};

export default LatestProjects;
