import React, { useCallback } from 'react';
import cl from './Nav.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import useMatch from '@/hooks/useMatch';
import useConfigContext from '@/hooks/useConfigContext';
import { updateConfig } from '@/contexts/ConfigContext';
import NavLink from '@/components/Nav/NavLink';

export const links: { text: string; href: string }[] = [
  {
    text: 'About me',
    href: 'AboutPage',
  },
  {
    text: 'Projects',
    href: 'ProjectsPage',
  },
  {
    text: 'Contacts',
    href: 'ContactsPage',
  },
];

const Nav = () => {
  const isMatch = useMatch('IntroPage');
  const { dispatch } = useConfigContext();

  const openDevToolsModal = useCallback(() => {
    dispatch(updateConfig({ devToolsModal: true }));
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isMatch && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={cl.navContainer}
          >
            {links.map((link, key) => (
              <NavLink link={link} key={key} />
            ))}
            <button className={cl.devToolsButton} onClick={openDevToolsModal}>
              .
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
