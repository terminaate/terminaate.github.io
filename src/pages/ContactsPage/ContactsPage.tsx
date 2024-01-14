import { PageContainer } from '@/components/PageContainer';
import { Title } from '@/components/Title';
import cl from './ContactsPage.module.scss';
import { ContactProps, contacts } from './ContactsPage.const';
import { MouseHover } from '@/components/MouseHover';
import { FC } from 'react';

const Contact: FC<ContactProps> = ({ text, link, icon }) => {
  return (
    <MouseHover className={cl.hoverContainer}>
      <a className={cl.contact} href={link}>
        {icon}
        <span>{text}</span>
      </a>
    </MouseHover>
  );
};

const ContactsPage = () => {
  return (
    <PageContainer className={cl.contactsPage}>
      <Title>Contacts:</Title>
      <div className={cl.container}>
        {contacts.map((contact, key) => (
          <Contact key={key} {...contact} />
        ))}
      </div>
    </PageContainer>
  );
};

export default ContactsPage;
