import { Title } from '@/components/Title';
import cl from '@/pages/AboutPage/AboutPage.module.scss';

export const About = () => {
  return (
    <>
      <Title className={cl.title}>About me:</Title>
      <p className={cl.text}>
        I'm a <span>young web developer</span> living in <span>Russia</span>, I
        devote most of my time to <span>developing</span> my own small projects
        and <span>self-improvement</span>, I have been doing web development for
        about <span>3 years</span>, during this time I tried{' '}
        <span>Frontend</span> and <span>Backend</span> directions, I write
        Backend completely only on Node. js (Nest/Express), in the Frontend area
        I have quite a lot of experience in writing React applications, so now I
        position myself as a <span>React frontend developer</span>
      </p>
    </>
  );
};
