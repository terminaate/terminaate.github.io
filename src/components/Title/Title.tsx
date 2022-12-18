import React, { FC } from 'react';
import cl from './Title.module.scss';
import { HTMLMotionProps, motion } from 'framer-motion';
import classNames from 'classnames';

interface ITitle extends HTMLMotionProps<'span'> {
  containerClassName?: string;
}

const Title: FC<ITitle> = ({
  children,
  containerClassName,
  className,
  ...props
}) => {
  return (
    <h1 className={classNames(cl.titleContainer, containerClassName)}>
      <motion.span
        transition={{ duration: 1 }}
        className={classNames(cl.title, className)}
        {...props}
        initial={{ translateY: '-150%' }}
        animate={{ translateY: 0 }}
        exit={{ translateY: '150%' }}
      >
        {children}
      </motion.span>
    </h1>
  );
};

export default Title;
