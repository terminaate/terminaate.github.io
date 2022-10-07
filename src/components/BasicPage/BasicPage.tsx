import { motion } from 'framer-motion';
import React, { FC, ReactNode } from 'react';

interface IBasicPage {
  children: ReactNode
}

const BasicPage: FC<IBasicPage> = ({ children }) => {
  return (
    <motion.div transition={{duration: 0.5}} initial={{ opacity: 0, translateY: "10px" }} animate={{ opacity: 1, translateY: "0px" }} exit={{ opacity: 0, translateY: "10px" }}>
      {children}
    </motion.div>
  );
};

export default BasicPage;