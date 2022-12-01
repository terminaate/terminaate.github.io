import React, { useLayoutEffect, useState } from 'react';
import cl from './Header.module.scss';
import NavPreventedLink from '@/components/NavPreventedLink';
import AnimatedSymbolsText, {
  IAnimatedSymbolsText,
} from '@/components/AnimatedSymbolsText';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { setModal } from '@/store/reducers/modalsSlice';
import { dispatch } from '@/store';

type LinkProps = {
  text: string;
  to: string;
  animate: boolean;
  props?: Partial<IAnimatedSymbolsText>;
};

const Link = ({ link }: { link: LinkProps }) => {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();
  const isMatch = location.pathname === link.to;

  useLayoutEffect(() => {
    setAnimate(link.animate);
  }, []);

  const onLinkClick = () => {
    setAnimate(true);
  };

  return (
    <NavPreventedLink to={link.to}>
      <motion.span
        onHoverStart={onLinkClick}
        whileHover={!isMatch ? { color: 'var(--text-secondary)' } : {}}
        initial={{ color: 'var(--text-inactive)' }}
        animate={isMatch ? { color: 'var(--text-primary)' } : {}}
        exit={{ color: 'var(--text-inactive)' }}
      >
        <AnimatedSymbolsText
          animate={animate}
          setAnimate={setAnimate}
          text={link.text}
          {...link.props}
        />
      </motion.span>
    </NavPreventedLink>
  );
};

const links: LinkProps[] = [
  {
    text: 'new Terminaate()',
    to: '/',
    animate: false,
    props: {
      delay: 25,
      clearDelay: 25,
      onDoubleClick: () => dispatch(setModal({ loginModal: true })),
    },
  },
  {
    text: '.works()',
    to: '/works',
    animate: false,
  },
  {
    text: '.contacts()',
    to: '/contacts',
    animate: false,
  },
];

const Header = () => {
  // const { authorized, user } = useAppSelector((state) => state.userSlice);
  // const dispatch = useAppDispatch();

  // const onUserButtonClick = () => {
  //   if (!authorized) {
  //     dispatch(setModal({ loginModal: true }));
  //   } else {
  //     dispatch(setModal({ userModal: true, userModalData: user as UserData }));
  //   }
  // };

  return (
    <header className={cl.header}>
      <div className={cl.linksContainer}>
        {links.map((link, key) => (
          <Link link={link} key={key} />
        ))}
      </div>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
