import React, { useRef } from 'react';
import cl from './Header.module.scss';
import logoImg from '!/logo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaGithub, GrUserWorker, MdArticle } from 'react-icons/all';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const routes = useRef([
    {
      path: "/posts",
      text: "Posts",
      icon: <MdArticle/>
    },
    {
      path: "/works",
      text: "Works",
      icon: <GrUserWorker/>
    },
    {
      path: "/github",
      text: "Github",
      icon: <FaGithub />
    },
  ])

  return (
    <>
      <header className={cl.header}>
        <div className={cl.headerContainer}>
          <Link to={'/home'} className={cl.homeLink}>
            <img src={logoImg} alt='' />
          </Link>
          {routes.current.map((route, key) => (
            <NavLink key={key} to={route.path}>
              {route.icon}
              <motion.span
                initial={{ color: 'var(--text-secondary)' }}
                animate={location.pathname === route.path ? { color: 'var(--text-primary)' } : {}}
                exit={{ color: 'var(--text-secondary)' }}
              >
                {route.text}
              </motion.span>
            </NavLink>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
