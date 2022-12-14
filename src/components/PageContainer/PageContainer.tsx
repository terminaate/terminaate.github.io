import React from 'react';
import cl from './PageContainer.module.scss';
import { HTMLMotionProps, motion, Transition, Variants } from 'framer-motion';
import classNames from 'classnames';

export const basePageTransition: Transition = { delay: 0.6, duration: 0.6 };
export const basePageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { delay: 0 },
  },
};

const PageContainer: React.FC<HTMLMotionProps<'div'>> = ({
  className,
  children,
  transition,
  ...props
}) => (
  <motion.div
    variants={basePageVariants}
    initial={'initial'}
    animate={'animate'}
    exit={'exit'}
    transition={{ ...basePageTransition, ...(transition ?? {}) }}
    {...props}
    className={classNames(cl.pageContainer, className)}
  >
    {children}
  </motion.div>
);

export default PageContainer;
