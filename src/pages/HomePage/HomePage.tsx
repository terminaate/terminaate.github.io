import React, { useCallback, useEffect, useState } from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './HomePage.module.scss';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';
import { skills } from '@/pages/HomePage/data';
import { useNavigate } from 'react-router-dom';
import { MdOutlineWork, RiContactsBookLine } from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import MouseMovingLink, {
  IMouseMovingLink,
} from '@/components/MouseMovingLink';
import Skill from './components/Skill';
import SkillContent from './components/SkillContent';
import { IconType } from 'react-icons';
import Button from '@/components/UI/Button';

const HomePage = () => {
  const [firstLink, setFirstLink] = useState<null | IMouseMovingLink>(null);
  const [secondLink, setSecondLink] = useState<null | IMouseMovingLink>(null);
  const { t } = useTranslation('home');
  const navigate = useNavigate();
  const [currentSkill, setCurrentSkill] = useState<string>('');

  const createLink = useCallback(
    (title: string, link: string, icon: IconType) => {
      const variant = Boolean(firstLink);

      const minTop = 10;
      const maxTop = 85;
      const minLeft = 15;
      const maxLeft = 55;
      const createStyle = (rotate: boolean) => ({
        top: Math.floor(Math.random() * (maxTop - minTop) + minTop) + '%',
        left: Math.floor(Math.random() * (maxLeft - minLeft) + minLeft) + '%',
        transform: rotate ? 'rotate(30deg)' : 'rotate(-30deg)',
      });
      const IconComponent = icon;

      const { transform, ...style } = createStyle(variant);
      return {
        title,
        link,
        icon: <IconComponent transform={transform} />,
        style,
      };
    },
    [],
  );

  useEffect(() => {
    const worksLink = createLink('.works()', '/works', MdOutlineWork);
    setFirstLink(worksLink);

    const contactsLink = createLink(
      '.contacts()',
      '/contacts',
      RiContactsBookLine,
    );
    setSecondLink(contactsLink);
  }, []);

  return (
    <PageContainer className={cl.homePage}>
      <MouseMovingLink {...firstLink!} />
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
          <div className={cl.userAvatarContainer}>terminaate.avatar</div>
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
        <div className={cl.worksButtonContainer}>
          <Button onClick={() => navigate('/works')} className={cl.worksButton}>
            {t('works-button_text') + ' >'}
          </Button>
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
              <Skill key={key} {...skill}>
                {skill.content.map((content, key) => (
                  <SkillContent
                    key={key}
                    currentSkill={currentSkill}
                    setCurrentSkill={setCurrentSkill}
                    {...content}
                  />
                ))}
              </Skill>
            ))}
          </ul>
        </div>
      </div>
      <MouseMovingLink {...secondLink!} />
    </PageContainer>
  );
};

export default HomePage;
