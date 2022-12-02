import React, { FC } from 'react';
import cl from './PageContainer.module.scss';
import classNames from 'classnames';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';

const pageContainerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const PageContainer: FC<HTMLMotionProps<'div'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      variants={pageContainerVariants}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      transition={{ duration: 0.6 }}
      {...props}
      className={classNames(cl.container, className)}
    >
      {children}
    </motion.div>
  );
};

export default PageContainer;
