import React from 'react';
import cl from './Nav.module.scss';
import useRoutingContext from '@/hooks/useRoutingContext';
import { AnimatePresence, motion } from 'framer-motion';
import useMatch from '@/hooks/useMatch';
import MouseHover from '@/components/MouseHover';
import useNavigate from '@/hooks/useNavigate';

const links: { text: string; href: string }[] = [
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
  const {
    state: { currentPage },
  } = useRoutingContext();
  const isMatch = useMatch(['AboutPage', 'ContactsPage', 'ProjectsPage']);
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isMatch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cl.navContainer}
        >
          {links.map((link, key) => (
            <MouseHover
              onClick={() => navigate(link.href)}
              key={key}
              className={cl.link}
            >
              <span className={link.href === currentPage ? "circlesText" : ""}>{link.text}</span>
              {link.href === currentPage && (
                <motion.div layoutId={'underline'} className={cl.underline} />
              )}
            </MouseHover>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Nav;
