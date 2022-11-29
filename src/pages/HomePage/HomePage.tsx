import React, { ReactElement } from 'react';
import cl from './HomePage.module.scss';
import BasicPage from '@/components/BasicPage';
import logoImg from '!/logo.svg';
import TypingText from '@/components/TypingText';
import { contacts, skills } from '@/pages/HomePage/data';
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

const Text = ({ text }: { text: string | ReactElement }) => {
  const { i18n: { language } } = useTranslation();

  return (
    <span
      data-ru-lang={language.toLowerCase().includes('ru')}
      className={cl.text}
    >
      {text}
    </span>
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
        <Text text={t('about-me_main')!} />
        <button onClick={() => navigate('/works')} className={cl.worksButton}>
          {t('works_button')}
        </button>
      </div>
      <div className={cl.loveContainer}>
        <Title text={t('love_title')!} />
        <Text text={t('love_main')!} />
      </div>
      <div className={cl.skillsContainer}>
        <Title text={t('skills_title')!} />
        <ul className={cl.skillsContent}>
          {skills.map((skill, key) => (
            <li key={key} className={cl.skillContainer}>
              <TypingText
                className={cl.secondaryTitle}
                text={skill.title}
                animateOnVisible={true}
                visibleProps={{ className: cl.visibleTitle }}
              />
              <ul className={cl.skillContents}>
                {skill.content.map((content, key) => (
                  <li className={cl.skillContent} key={key}>
                    {content.icon && <>{content.icon}</>}
                    <TypingText
                      className={cl.skillContentText}
                      text={content.text}
                      animateOnVisible={true}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className={cl.contactsContainer}>
        <Title text={t('contacts_title')!} />
        <ul className={cl.contactsContent}>
          {contacts.map((item, key) => (
            <li key={key}>
              <a target={'_blank'} rel={'noreferrer'} href={item.link ? item.link : ''}
                 onClick={item.onClick ? item.onClick : () => {
                 }}>
                {item.icon}
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={cl.copyrightContainer}>
        <span>© 2022 Bahram Itkulov. All Rights Reserved.</span>
      </div>
    </BasicPage>
  );
};

export default HomePage;
