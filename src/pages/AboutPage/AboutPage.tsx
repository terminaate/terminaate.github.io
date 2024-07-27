import { PageContainer } from '@/components/PageContainer';
import cl from './AboutPage.module.scss';
import { Title } from '@/components/Title';
import { MouseHover } from '@/components/MouseHover';
import { Skills } from '@/pages/AboutPage/components/Skills';
import { About } from '@/pages/AboutPage/components/About';
import { LatestProjects } from '@/pages/AboutPage/components/LatestProjects';
import { FC } from 'react';

const sections: FC[] = [About, LatestProjects, Skills];

const AboutPage = () => {
  return (
    <PageContainer className={cl.aboutPage}>
      <MouseHover
        className={cl.usernameContainer}
        text={'My name is...'}
        position={'bottom'}
        magnetic
        fitToElement={{ borderRadius: '3px' }}
        magneticAntiPressure={9}
      >
        <Title containerClassName={cl.username}>BAHRAM TERMINAATE</Title>
      </MouseHover>

      {sections.map((Component, key) => (
        <div key={key} className={cl.contentContainer}>
          <Component />
        </div>
      ))}
    </PageContainer>
  );
};

export default AboutPage;
