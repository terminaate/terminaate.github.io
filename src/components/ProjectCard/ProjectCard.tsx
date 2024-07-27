import { FC, HTMLAttributes } from 'react';
import cl from './ProjectCard.module.scss';
import { FaGithub } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { MouseHover } from '@/components/MouseHover';
import classNames from 'classnames';
import { ProjectProps } from '@/pages/ProjectsPage/ProjectsPage.const';

type Props = HTMLAttributes<HTMLDivElement> & {
  project: ProjectProps;
};

export const ProjectCard: FC<Props> = ({ project, className, ...props }) => {
  const openProjectLink = () => {
    window.open(project.link ?? project.githubLink, '_blank');
  };

  return (
    <div {...props} className={classNames(cl.projectContainer, className)}>
      <MouseHover
        onClick={openProjectLink}
        className={cl.projectImage}
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className={cl.projectContent}>
        <div className={cl.projectTitleContainer}>
          <h2 className={cl.projectTitle}>{project.title}</h2>
          <div className={cl.projectLinks}>
            {project.githubLink && (
              <MouseHover magnetic text={'Source code'}>
                <a
                  href={project.githubLink}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <FaGithub />
                </a>
              </MouseHover>
            )}
            {project.link && (
              <MouseHover text={'Link'}>
                <a href={project.link} target={'_blank'} rel={'noreferrer'}>
                  <BiLink />
                </a>
              </MouseHover>
            )}
          </div>
        </div>

        <div className={cl.projectDescription}>{project.description}</div>
        <div className={cl.projectTags}>
          {project.tags.map((tag, key) => (
            <span key={key}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
