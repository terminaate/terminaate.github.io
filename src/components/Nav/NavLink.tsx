import React, { FC } from 'react';
import useNavigate from '@/hooks/useNavigate';
import useRoutingContext from '@/hooks/useRoutingContext';
import MouseHover from '@/components/MouseHover';
import cl from './Nav.module.scss';
import { motion } from 'framer-motion';
import { links } from '@/components/Nav/Nav';

interface INavLink {
  link: ArrayElement<typeof links>;
}

const NavLink: FC<INavLink> = ({ link }) => {
  const navigate = useNavigate();
  const {
    state: { currentPage },
  } = useRoutingContext();

  return (
    <MouseHover onClick={() => navigate(link.href)} className={cl.link}>
      <span data-active={link.href === currentPage}>{link.text}</span>
      {link.href === currentPage && (
        <motion.div layoutId={'navline'} className={cl.navline} />
      )}
    </MouseHover>
  );
};

export default NavLink;
