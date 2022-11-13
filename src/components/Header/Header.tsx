import React from 'react';
import cl from './Header.module.scss';
import logoImg from '!/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, GrUserWorker, MdArticle } from 'react-icons/all';
import { motion } from 'framer-motion';
import NavPreventedLink from '@/components/NavPreventedLink';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';
import { userAvatarUrl } from '@/http';

const Header = () => {
  const location = useLocation();
  const { authorized, user } = useAppSelector((state) => state.userSlice);
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

  const onUserButtonClick = () => {
    if (!authorized) {
      dispatch(setModal({ loginModal: true }));
    } else {
      dispatch(setModal({ userModal: true, userModalData: user }));
    }
  };

  return (
    <header className={cl.header}>
      <div className={cl.headerContainer}>
        <div className={cl.linksContainer}>
          <Link to={'/home'} className={cl.homeLink}>
            <img src={logoImg} alt="" />
          </Link>
          {routes.map((route, key) => (
            <NavPreventedLink key={key} to={route.path}>
              {route.icon}
              <motion.span
                initial={{ color: 'var(--text-secondary)' }}
                animate={
                  location.pathname === route.path && {
                    color: 'var(--text-primary)',
                  }
                }
                exit={{ color: 'var(--text-secondary)' }}
              >
                {route.text}
              </motion.span>
            </NavPreventedLink>
          ))}
        </div>
        <button onClick={onUserButtonClick} className={cl.userAvatar}>
          <img src={userAvatarUrl + user.id} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
