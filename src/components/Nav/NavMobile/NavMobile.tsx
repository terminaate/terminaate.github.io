import { useState } from 'react';
import cl from './NavMobile.module.scss';
import { FaGripLines } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { links } from '../Nav.const';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { Link } from '@/components/UI/Link';
import { useMatch } from '@/contexts/RoutingContext/hooks/useMatch';
import { useRoutingState } from '@/contexts/RoutingContext/hooks/useRoutingState';

export const NavMobile = () => {
  const isMatch = useMatch('IntroPage');
  const [visible, setVisible] = useState<boolean>(false);
  const containerRef = useOutsideClick(() => {
    setVisible(false);
  });
  const { currentPage } = useRoutingState();

  return (
    <>
      {!isMatch && (
        <nav
          data-visible={visible}
          ref={containerRef}
          className={cl.navContainer}
        >
          <button onClick={() => setVisible(!visible)} className={cl.navButton}>
            <FaGripLines />
          </button>
          <AnimatePresence>
            {visible && (
              <motion.div
                className={cl.navContent}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6 }}
                onClick={() => setVisible(false)}
              >
                {links.map((link, key) => (
                  <Link
                    data-active={currentPage === link.href}
                    href={link.href}
                    key={key}
                    className={cl.link}
                  >
                    {link.text}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      )}
    </>
  );
};
