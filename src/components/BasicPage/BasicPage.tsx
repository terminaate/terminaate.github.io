import { motion } from 'framer-motion';
import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import cl from './BasicPage.module.scss';

interface IBasicPage {
  children?: ReactNode;
  className?: string;
}

const BasicPage: FC<IBasicPage> = ({ children, className }) => {
  return (
    <motion.div transition={{duration: 0.5}} className={classNames(cl.basicPage, className!)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default BasicPage;