import React, { FC } from 'react';
import cl from './ContactsPage.module.scss';
import PageContainer from '@/components/PageContainer';
import { ContactProps, contacts } from './data';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';
import Title from '@/components/Title';
import { useTranslation } from 'react-i18next';

const Contact: FC<ContactProps> = ({ text, icon, link, onClick }) => {
  const content = (
    <>
      {icon}
      <AnimatedSymbolsText text={text} />
    </>
  );

  return (
    <>
      {link ? (
        <a
          href={link}
          target={'_blank'}
          rel={'noreferrer'}
          className={cl.contactContainer}
        >
          {content}
        </a>
      ) : (
        <div onClick={onClick as any} className={cl.contactContainer}>
          {content}
        </div>
      )}
    </>
  );
};

const ContactsPage = () => {
  const { t } = useTranslation('contacts');

  return (
    <PageContainer className={cl.contactsPage}>
      <Title container>//{t('title')}</Title>
      {contacts.map((contact, key) => (
        <Contact {...contact} key={key} />
      ))}
      <span className={cl.creditsText}>
        //Made with <span className={cl.heart}>❤</span> by{' '}
        <AnimatedSymbolsText
          delayAnim={500}
          delay={100}
          clearDelay={100}
          infinite={true}
          text={'terminaate'}
        />
      </span>
    </PageContainer>
  );
};

export default ContactsPage;
