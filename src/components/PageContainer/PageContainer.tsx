import React, { useEffect, useRef } from 'react';
import cl from './PageContainer.module.scss';
import { HTMLMotionProps, motion } from 'framer-motion';
import classNames from 'classnames';

const PageContainer: React.FC<HTMLMotionProps<'div'>> = ({
  className,
  children,
  ...props
}) => {
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      {...props}
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={classNames(cl.container, className!)}
    >
      {children}
    </motion.div>
  );
};

export default PageContainer;
