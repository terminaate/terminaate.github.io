import { FC, useState } from 'react';
import cl from './Title.module.scss';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import classNames from 'classnames';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Props = HTMLMotionProps<'span'> & {
  containerClassName?: string;
};

export const Title: FC<Props> = ({
  children,
  containerClassName,
  className,
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const titleRef = useIntersectionObserver(() => {
    setVisible(true);
  });

  return (
    <h1
      ref={titleRef}
      className={classNames(cl.titleContainer, containerClassName)}
    >
      <AnimatePresence>
        {visible && (
          <motion.span
            transition={{ duration: 0.8 }}
            className={classNames(cl.title, className)}
            {...props}
            initial={{ translateY: '-150%' }}
            animate={{ translateY: 0 }}
            exit={{ translateY: '150%' }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </h1>
  );
};
