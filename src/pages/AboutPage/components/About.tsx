import { Title } from '@/components/Title';
import cl from '@/pages/AboutPage/AboutPage.module.scss';

export const About = () => {
  return (
    <>
      <Title className={cl.title}>About me:</Title>
      <p className={cl.text}>
        I am a young web developer from <span>Russia</span> with{' '}
        <span>3 years</span> of experience in development. My three-year journey
        in frontend development has been characterized by continuous growth and
        refinement. With <span>2+ years</span> of hands-on experience in
        commercial development, I have cultivated deep expertise in{' '}
        <span>React</span> and significant proficiency in <span>Next.js</span>.
        My projects stand out for their efficiency, modularity, and appealing
        design. I am dedicated to delivering high-quality web applications that
        not only meet technical standards but also embody aesthetic excellence.
      </p>
    </>
  );
};
