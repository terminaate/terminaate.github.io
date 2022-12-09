import React from 'react';
import cl from './ContactsPage.module.scss';
import PageContainer from '@/components/PageContainer';
import { contacts } from './data';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';
import { useTranslation } from 'react-i18next';
import Contact from '@/pages/ContactsPage/components/Contact';

const ContactsPage = () => {
  const { t } = useTranslation('contacts');

  return (
    <PageContainer title={`//${t('title')}`} className={cl.contactsPage}>
      {contacts.map((contact, key) => (
        <Contact {...contact} key={key} />
      ))}
      <span className={cl.creditsText}>
        //Made with <span className={cl.heart}>❤</span> by
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
