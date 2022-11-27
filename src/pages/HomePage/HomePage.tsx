import React from 'react';
import cl from './HomePage.module.scss';
import BasicPage from '@/components/BasicPage';
import logoImg from '!/logo.svg';
import TypingText from '@/components/TypingText';
import { skills } from '@/pages/HomePage/data';

const HomePage = () => {
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
            Hello world! I'm <img src={logoImg} alt="" /> and i'm{' '}
            <span>
              young frontend developer <div />
            </span>
          </span>
        </div>
      </div>
      <div className={cl.userContainer}>
        <div className={cl.userContent}>
          <TypingText
            text={'Bahram Itkulov'}
            animateOnVisible={true}
            className={cl.name}
          />
          <div className={cl.logoContainer}>
            <img src={logoImg} alt="T$rm1naate" />
            <TypingText
              text={'( developer )'}
              className={cl.logoText}
              animateOnVisible={true}
            />
          </div>
        </div>
        <div className={cl.userImage}>img</div>
      </div>
      <div className={cl.skillsContainer}>
        <TypingText
          className={cl.skillsTitle}
          text={'Skills'}
          animateOnVisible={true}
        />
        <div className={cl.skillsContent}>
          {skills.map((skill, key) => (
            <div key={key} className={cl.skillContainer}>
              <TypingText
                className={cl.skillTitle}
                text={skill.title}
                animateOnVisible={true}
              />
              <div className={cl.skillContents}>
                {skill.content.map((content, key) => (
                  <div className={cl.skillContent} key={key}>
                    {content.icon}
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
