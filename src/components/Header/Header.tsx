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
import { UserData } from '@/types/UserData';

type RouteProps = {
  path: string;
  text: string;
  icon: JSX.Element;
  external?: boolean;
};

const routes: RouteProps[] = [
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
    path: 'https://github.com/terminaate/terminaate.github.io',
    text: 'Github',
    icon: <FaGithub />,
    external: true,
  },
];

const Header = () => {
  const location = useLocation();
  const { authorized, user } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();

  const onUserButtonClick = () => {
    if (!authorized) {
      dispatch(setModal({ loginModal: true }));
    } else {
      dispatch(setModal({ userModal: true, userModalData: user as UserData }));
    }
  };

  // todo
  // fix icon animation (color)

  return (
    <header className={cl.header}>
      <div className={cl.headerContainer}>
        <div className={cl.linksContainer}>
          <Link to={'/'} className={cl.homeLink}>
            <img src={logoImg} alt="T$rm1naate" />
          </Link>
          {routes.map((route, key) => (
            <div key={key}>
              {route.external ? (
                <a href={route.path} target={'_blank'} rel="noreferrer">
                  {route.icon}
                  <span>{route.text}</span>
                </a>
              ) : (
                <NavPreventedLink to={route.path}>
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
              )}
            </div>
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
