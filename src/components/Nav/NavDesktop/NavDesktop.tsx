import { FC, useCallback } from 'react';
import cl from './NavDesktop.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useMatch } from '@/contexts/RoutingContext/hooks/useMatch';
import { MouseHover } from '@/components/MouseHover';
import { links } from '../Nav.const';
import { useRoutingState } from '@/contexts/RoutingContext/hooks/useRoutingState';
import { useRoutingActions } from '@/contexts/RoutingContext/hooks/useRoutingActions';
import { useConfigActions } from '@/contexts/ConfigContext/hooks/useConfigActions';

type Props = {
  link: ArrayElement<typeof links>;
};

const NavLink: FC<Props> = ({ link }) => {
  const { setCurrentPage: navigate } = useRoutingActions();
  const { currentPage } = useRoutingState();

  return (
    <MouseHover onClick={() => navigate(link.href)} className={cl.link}>
      <span data-active={link.href === currentPage}>{link.text}</span>
      {link.href === currentPage && (
        <motion.div layoutId={'navline'} className={cl.navline} />
      )}
    </MouseHover>
  );
};

export const NavDesktop = () => {
  const isMatch = useMatch('IntroPage');
  const { updateConfig } = useConfigActions();

  const openDevToolsModal = useCallback(() => {
    updateConfig({ devToolsModal: true });
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
            <MouseHover text={'Hmmm...'}>
              <button className={cl.devToolsButton} onClick={openDevToolsModal}>
                .
              </button>
            </MouseHover>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
