import React, { useLayoutEffect, useState } from 'react';
import cl from './Header.module.scss';
import NavPreventedLink from '@/components/NavPreventedLink';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';
import { UserData } from '@/types/UserData';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

type LinkProps = {
  text: string;
  to: string;
  animate: boolean;
};

const Link = ({ link }: { link: LinkProps }) => {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    setAnimate(link.animate);
  }, []);

  const onLinkClick = () => {
    setAnimate(true);
  };

  return (
    <NavPreventedLink to={link.to}>
      <motion.span
        onClick={onLinkClick}
        initial={{ color: 'var(--text-inactive)' }}
        animate={
          location.pathname === link.to ? { color: 'var(--text-primary)' } : {}
        }
        exit={{ color: 'var(--text-inactive)' }}
      >
        <AnimatedSymbolsText
          animate={animate}
          setAnimate={setAnimate}
          text={link.text}
        />
      </motion.span>
    </NavPreventedLink>
  );
};

const links = [
  {
    text: 'new Terminaate()',
    to: '/',
    animate: false,
  },
  {
    text: '.works()',
    to: '/works',
    animate: false,
  },
];

const Header = () => {
  const { authorized, user } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();

  const onUserButtonClick = () => {
    if (!authorized) {
      dispatch(setModal({ loginModal: true }));
    } else {
      dispatch(setModal({ userModal: true, userModalData: user as UserData }));
    }
  };

  return (
    <header className={cl.header}>
      <div className={cl.container}>
        {links.map((link, key) => (
          <Link link={link} key={key} />
        ))}
      </div>
    </header>
  );
};

export default Header;
