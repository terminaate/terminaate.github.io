import React from 'react';
import cl from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '!/images/logo.svg';
import { GrUserWorker, MdArticle } from 'react-icons/all';

const Header = () => {

  return (
    <div className={cl.headerContainer}>
      <Link className={cl.homePageLink} to={'/'}>
        <img src={logoImg} alt={'logo'} />
      </Link>
      <NavLink to={"/posts"}>
        <MdArticle/>
        <span>Posts</span>
      </NavLink>
      <NavLink to={"/works"}>
        <GrUserWorker/>
        <span>Works</span>
      </NavLink>
    </div>
  );
};

export default Header;