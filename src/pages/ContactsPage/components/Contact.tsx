import React, { FC, useCallback } from 'react';
import { ContactProps } from '@/pages/ContactsPage/data';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';
import cl from '@/pages/ContactsPage/ContactsPage.module.scss';

const Contact: FC<ContactProps> = ({ text, icon, link, onClick }) => {
  const content = (
    <>
      {icon}
      <AnimatedSymbolsText text={text} />
    </>
  );

  const onContactClick = useCallback(onClick! as any, []);

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
        <div onClick={onContactClick} className={cl.contactContainer}>
          {content}
        </div>
      )}
    </>
  );
};

export default Contact;
