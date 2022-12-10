import React, { FC, useCallback, useState } from 'react';
import { LinkProps } from '../data';
import { useMatch } from 'react-router-dom';
import NavPreventedLink from '@/components/NavPreventedLink';
import { motion } from 'framer-motion';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';

const Link: FC<LinkProps> = ({ props, to, animate: initialAnimate, text }) => {
  const [animate, setAnimate] = useState(initialAnimate);
  const isMatch = useMatch(to);

  const onLinkHover = useCallback(() => {
    setAnimate(true);
  }, []);

  return (
    <NavPreventedLink to={to}>
      <motion.span
        onHoverStart={onLinkHover}
        whileHover={!isMatch ? { color: 'var(--text-secondary)' } : {}}
        initial={{ color: 'var(--text-inactive)' }}
        animate={isMatch ? { color: 'var(--text-primary)' } : {}}
        exit={{ color: 'var(--text-inactive)' }}
      >
        <AnimatedSymbolsText
          animate={animate}
          setAnimate={setAnimate}
          text={text}
          {...props}
        />
      </motion.span>
    </NavPreventedLink>
  );
};

export default Link;
