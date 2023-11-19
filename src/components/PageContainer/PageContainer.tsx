import cl from './PageContainer.module.scss';
import { HTMLMotionProps, motion, Transition, Variants } from 'framer-motion';
import classNames from 'classnames';
import { FC } from 'react';
import { useConfigState } from '@/contexts/ConfigContext/hooks/useConfigState';

export const basePageTransition: Transition = { duration: 0.6 };
export const basePageVariants: Variants = {
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

export const PageContainer: FC<HTMLMotionProps<'div'>> = ({
  className,
  children,
  transition,
  ...props
}) => {
  const { transitionBetweenPages } = useConfigState();

  return transitionBetweenPages ? (
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
  ) : (
    <motion.div {...props} className={classNames(cl.pageContainer, className)}>
      {children}
    </motion.div>
  );
};
