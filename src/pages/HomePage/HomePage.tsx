import React, {
  CSSProperties,
  FC,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './HomePage.module.scss';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';
import { skills } from '@/pages/HomePage/data';
import { useNavigate } from 'react-router-dom';
import { MdOutlineWork, RiContactsBookLine } from 'react-icons/all';
import Tooltip from '@/components/Tooltip';
import Particles from '@/components/Particles';

type LinkProps = {
  icon: ReactElement;
  link: string;
  style: CSSProperties;
  title: string;
};

const Link: FC<LinkProps> = ({ icon, link, style, title }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      style={style}
      className={cl.linkButton}
    >
      <Tooltip position={'top'} text={title}>
        {icon}
      </Tooltip>
    </button>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const [firstLink, setFirstLink] = useState<null | LinkProps>(null);
  const [secondLink, setSecondLink] = useState<null | LinkProps>(null);

  useEffect(() => {
    const variant = Boolean(Math.floor(Math.random() * 2));

    const minTop = 10;
    const maxTop = 85;
    const minLeft = 15;
    const maxLeft = 55;
    const createStyle = (rotate: boolean) => ({
      top: Math.floor(Math.random() * (maxTop - minTop) + minTop) + '%',
      left: Math.floor(Math.random() * (maxLeft - minLeft) + minLeft) + '%',
      transform: rotate ? 'rotate(30deg)' : 'rotate(-30deg)',
    });

    const { transform: workTransform, ...workStyle } = createStyle(variant);
    const worksVariant = {
      title: '.works()',
      link: '/works',
      icon: (
        <MdOutlineWork
          className={cl.linkIcon}
          style={{ transform: workTransform }}
        />
      ),
      style: workStyle,
    };
    const { transform: contactsTransform, ...contactsStyle } = createStyle(
      !variant,
    );
    const contactsVariant = {
      title: '.contacts()',
      link: '/contacts',
      icon: (
        <RiContactsBookLine
          className={cl.linkIcon}
          style={{ transform: contactsTransform }}
        />
      ),
      style: contactsStyle,
    };

    setFirstLink(variant ? worksVariant : contactsVariant);
    setSecondLink(variant ? contactsVariant : worksVariant);
  }, []);

  return (
    <PageContainer className={cl.homePage}>
      <div className={cl.linkContainer}>
        <Link {...firstLink!} />
      </div>
      <div className={cl.container}>
        <div className={cl.userContainer}>
          <div className={cl.nameContainer}>
            <span className={cl.name}>
              <AnimatedSymbolsText
                animateOnVisible={true}
                tag={'h1'}
                text={'Bahram_Itkulov'}
                className={cl.name}
              />
              <span className={cl.subTitle}>//Name</span>
            </span>
            <span className={cl.nameDescription}>
              <AnimatedSymbolsText
                animateOnVisible={true}
                clearDelay={25}
                delay={25}
                text={'Professional_React_developer'}
                className={cl.nameDescription}
              />
              <span className={cl.subTitle}>//Profession</span>
            </span>
          </div>
          <div className={cl.userAvatarContainer}>
            <img src="" alt="terminaate.avatar" />
          </div>
        </div>
        <div className={cl.aboutContainer}>
          <AnimatedSymbolsText
            animateOnVisible={true}
            tag={'h1'}
            className={cl.title}
            text={'//About me'}
          />
          <span className={cl.aboutText}>
            Bahram is a young web developer living in Russia, he devotes most of
            his time to developing his own small projects, and self-improvement,
            he has been doing web development for about 2 years, during which
            time he studied the frontend and backend spheres, at the moment he
            positions himself as a React front-end developer.
          </span>
        </div>
        <div className={cl.skillsContainer}>
          <AnimatedSymbolsText
            animateOnVisible={true}
            tag={'h1'}
            className={cl.title}
            text={'//Skills'}
          />
          <ul className={cl.skillsList}>
            {skills.map((skill, key) => (
              <li key={key} className={cl.skill}>
                <AnimatedSymbolsText
                  className={cl.subTitle}
                  text={skill.title}
                  animateOnVisible={true}
                />
                <ul className={cl.skillContents}>
                  {skill.content.map((content, key) => (
                    <li className={cl.skillContent} key={key}>
                      {content.icon && <>{content.icon}</>}
                      <AnimatedSymbolsText
                        animateOnVisible={true}
                        text={content.text}
                        className={cl.skillContentText}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cl.linkContainer}>
        <Link {...secondLink!} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
