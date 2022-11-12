import React from 'react';
import cl from './Header.module.scss';
import logoImg from '!/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, GrUserWorker, MdArticle } from 'react-icons/all';
import { motion } from 'framer-motion';
import NavPreventedLink from '@/components/NavPreventedLink';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';

const userAvatarLink = 'https://robohash.org/' + Math.random();

const Header = () => {
  const location = useLocation();
  const { authorized } = useAppSelector(state => state.userSlice.user);
  const dispatch = useAppDispatch();

  const routes = [
    {
      path: '/posts',
      text: 'Posts',
      icon: <MdArticle />,
    },
    {
      path: '/works',
      text: 'Works',
      icon: <GrUserWorker />,
    },
    {
      path: '/github',
      text: 'Github',
      icon: <FaGithub />,
    },
  ];

  const openLoginModal = () => {
    if (!authorized) {
      dispatch(setModal({ loginModal: true }));
    }
  };

  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }} className={cl.header}>
      <div className={cl.headerContainer}>
        <div className={cl.linksContainer}>
          <Link to={'/home'} className={cl.homeLink}>
            <img src={logoImg} alt='' />
          </Link>
          {routes.map((route, key) => (
            <NavPreventedLink key={key} to={route.path}>
              {route.icon}
              <motion.span
                initial={{ color: 'var(--text-secondary)' }}
                animate={location.pathname === route.path && { color: 'var(--text-primary)' }}
                exit={{ color: 'var(--text-secondary)' }}
              >
                {route.text}
              </motion.span>
            </NavPreventedLink>
          ))}
        </div>
        <div onClick={openLoginModal} className={cl.userAvatar}>
          <img src={userAvatarLink} alt='' />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
