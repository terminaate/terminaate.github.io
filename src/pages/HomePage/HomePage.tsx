import React from 'react';
import cl from './HomePage.module.scss';
import BasicPage from '@/components/BasicPage';
import logoImg from '!/logo.svg';
import TypingText from '@/components/TypingText';
import { SkillProps, skills } from '@/pages/HomePage/data';
import { Trans, useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <BasicPage
      header={true}
      container={true}
      containerClassName={cl.homePageContainer}
      className={cl.homePage}
    >
      <div className={cl.canvasContainer}>
        <span>rn nothing is here</span>
        <div className={cl.greetingsBlock}>
          <span>
            <Trans ns={'home'} i18nKey={'greetings'}
                   components={{ span: <span />, div: <div />, logo: <img src={logoImg} alt='' /> }} />
          </span>
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
        <TypingText
          className={cl.aboutTitle}
          text={t('about-me_title')!}
          animateOnVisible={true}
        />
        <span className={cl.aboutText}>
          Bahram is a freelance and a full-stack developer based in Russia
        </span>
      </div>
      <div className={cl.skillsContainer}>
        <TypingText
          className={cl.skillsTitle}
          text={t('skills_title')!}
          animateOnVisible={true}
        />
        <div className={cl.skillsContent}>
          {skills.map((skill: SkillProps, key: number) => (
            <div key={key} className={cl.skillContainer}>
              <TypingText
                className={cl.skillTitle}
                text={skill.title}
                animateOnVisible={true}
              />
              <div className={cl.skillContents}>
                {skill.content.map((content: SkillProps['content'], key: number) => (
                  <div className={cl.skillContent} key={key}>
                    {content.icon && (
                      <>
                        {content.icon}
                      </>
                    )}
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
      <span>asd</span>
    </BasicPage>
  );
};

export default HomePage;
