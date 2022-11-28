import { motion } from 'framer-motion';
import React, { FC, ReactNode, useEffect, useRef } from 'react';
import classNames from 'classnames';
import cl from './BasicPage.module.scss';
import Header from '@/components/Header';

interface IBasicPage {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  container?: boolean;
  header?: boolean;
}

const BasicPage: FC<IBasicPage> = ({
                                     children,
                                     className,
                                     containerClassName,
                                     container = false,
                                     header = false,
                                   }) => {
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (container && containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {header && container ? (
        <div className={classNames(cl.basicPage, className!)}>
          <Header />
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={classNames(cl.container, containerClassName!)}
          >
            {children}
          </motion.div>
        </div>
      ) : (
        <motion.div
          transition={{ duration: 0.5 }}
          className={classNames(cl.basicPage, className!)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {header && <Header />}
          {container ? (
            <div ref={containerRef} className={classNames(cl.container, containerClassName!)}>
              {children}
            </div>
          ) : (
            children
          )}
        </motion.div>
      )}
    </>
  );
};

export default BasicPage;
