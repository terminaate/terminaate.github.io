import React from 'react';
import cl from './Header.module.scss';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { links } from './data';
import Link from './components/Link';

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.linksContainer}>
        {links.map((link, key) => (
          <Link key={key} {...link} />
        ))}
      </div>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
