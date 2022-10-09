import React from 'react';
import cl from './Header.module.scss';
import logoImg from '!/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, GrUserWorker, MdArticle } from 'react-icons/all';

const Header = () => {
  return (
    <>
      <header className={cl.header}>
        <div className={cl.headerContainer}>
          <Link to={'/home'} className={cl.homeLink}>
            <img src={logoImg} alt='' />
          </Link>
          <NavLink to={'/posts'}>
            <MdArticle />
            <span>Posts</span>
          </NavLink>
          <NavLink to={'/works'}>
            <GrUserWorker />
            <span>Works</span>
          </NavLink>
          <NavLink to={'/github'}>
            <FaGithub />
            <span>Github</span>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;