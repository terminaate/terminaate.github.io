import React, { useRef } from 'react';
import useNavigate from '@/hooks/useNavigate';
import useMatch from '@/hooks/useMatch';
import { AnimatePresence, motion } from 'framer-motion';
import cl from './Header.module.scss';
import logoImg from '!/logo.svg';
import { BiMenuAltRight } from 'react-icons/all';
import {
  basePageTransition,
  basePageVariants,
} from '@/components/PageContainer';
import MouseHover from '@/components/MouseHover';

const Header = () => {
  const navigate = useNavigate();
  const isIntroPage = useMatch('IntroPage');
  const logoRef = useRef<null | HTMLButtonElement>(null);

  return (
    <AnimatePresence>
      {!isIntroPage && (
        <motion.header
          className={cl.headerContainer}
          transition={basePageTransition}
          variants={basePageVariants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
        >
          <MouseHover text={'Home'} position={'bottom'}>
            <button
              ref={logoRef}
              onClick={() => navigate('HomePage')}
              className={cl.homeButton}
            >
              <img src={logoImg} alt="" />
            </button>
          </MouseHover>
          <MouseHover text={'Menu'} position={'bottom'}>
            <button
              onClick={() => navigate('MenuPage')}
              className={cl.menuButton}
            >
              <span/>
              <span/>
              <span/>
            </button>
          </MouseHover>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
