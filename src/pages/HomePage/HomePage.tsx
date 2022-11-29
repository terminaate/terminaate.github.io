import React from 'react';
import cl from './HomePage.module.scss';
import BasicPage from '@/components/BasicPage';
import logoImg from '!/logo.svg';
import TypingText from '@/components/TypingText';
import { skills } from '@/pages/HomePage/data';
import { useTranslation } from 'react-i18next';
import CanvasModel from '@/components/CanvasModel';
import { useNavigate } from 'react-router-dom';

const Title = ({ text = 'Default title' }: { text: string }) => {
  return (
    <TypingText
      className={cl.title}
      text={text}
      animateOnVisible={true}
      visibleProps={{ className: cl.visibleTitle }}
    />
  );
};

const HomePage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation('home');
  const navigate = useNavigate();

  return (
    <BasicPage
      header={true}
      container={true}
      containerClassName={cl.homePageContainer}
      className={cl.homePage}
    >
      <div className={cl.canvasContainer}>
        <CanvasModel />
        <div className={cl.greetingsBlock}>
          <span>{t('greetings')}</span>
        </div>
      </div>
      <div className={cl.userContainer}>
        <div className={cl.userContent}>
          <TypingText
            text={t('name')!}
            animateOnVisible={true}
            className={cl.name}
          />
          <div className={cl.logoContainer}>
            <img src={logoImg} alt='T$rm1naate' />
          </div>
        </div>
        <div className={cl.userImage}>img</div>
      </div>
      <div className={cl.aboutContainer}>
        <Title text={t('about-me_title')!} />
        <span
          data-ru-lang={language.toLowerCase().includes('ru')}
          className={cl.text}
        >
          {t('about-me_main')}
        </span>
        <button onClick={() => navigate('/works')} className={cl.worksButton}>
          {t('works_button')}
        </button>
      </div>
      <div className={cl.skillsContainer}>
        <Title text={t('skills_title')!} />
        <div className={cl.skillsContent}>
          {skills.map((skill, key) => (
            <div key={key} className={cl.skillContainer}>
              <TypingText
                className={cl.secondaryTitle}
                text={skill.title}
                animateOnVisible={true}
                visibleProps={{ className: cl.visibleTitle }}
              />
              <div className={cl.skillContents}>
                {skill.content.map((content, key) => (
                  <div className={cl.skillContent} key={key}>
                    {content.icon && <>{content.icon}</>}
                    <TypingText
                      className={cl.skillContentText}
                      text={content.text}
                      animateOnVisible={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BasicPage>
  );
};

export default HomePage;
