import React, {
  CSSProperties,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './HomePage.module.scss';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';
import { skills } from '@/pages/HomePage/data';
import { useNavigate } from 'react-router-dom';
import { MdOutlineWork, RiContactsBookLine } from 'react-icons/all';
import Tooltip from '@/components/Tooltip';
import { useTranslation } from 'react-i18next';

type LinkProps = {
  icon: ReactElement;
  link: string;
  style: CSSProperties;
  title: string;
};

const Link: FC<LinkProps> = ({ icon, link, style, title }) => {
  const navigate = useNavigate();
  const linkRef = useRef<null | HTMLButtonElement>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const { current: link } = linkRef;
    if (link) {
      const x = (window.innerWidth - e.pageX * 3) / 90;
      const y = (window.innerHeight - e.pageY * 3) / 90;
      link.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <button
      ref={linkRef}
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
  const [firstLink, setFirstLink] = useState<null | LinkProps>(null);
  const [secondLink, setSecondLink] = useState<null | LinkProps>(null);
  const { t } = useTranslation('home');

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
              <span className={cl.subTitle}>//{t('name_comment')}</span>
            </span>
            <span className={cl.nameDescription}>
              <AnimatedSymbolsText
                animateOnVisible={true}
                clearDelay={25}
                delay={25}
                text={'Professional_React_developer'}
                className={cl.nameDescription}
              />
              <span className={cl.subTitle}>//{t('profession_comment')}</span>
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
            text={'//' + t('about-me_title')}
          />
          <span className={cl.aboutText}>{t('about-me_text')}</span>
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
