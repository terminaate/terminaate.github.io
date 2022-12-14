import React from 'react';
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

const Header = () => {
  const navigate = useNavigate();
  const isIntroPage = useMatch('IntroPage');

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
          <button
            onClick={() => navigate('HomePage')}
            className={cl.homeButton}
          >
            <img src={logoImg} alt="" />
          </button>
          <button
            onClick={() => navigate('MenuPage')}
            className={cl.menuButton}
          >
            <BiMenuAltRight />
          </button>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
