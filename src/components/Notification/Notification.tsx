import React, { useEffect, useState } from 'react';
import cl from './Notification.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const Notification = () => {
  const [state, setState] = useState<string>('');
  const [timeout, setTimeout] = useState<number>(1000);

  useEffect(() => {
    window.setNotification = (text, newTimeout = timeout) => {
      if (timeout !== newTimeout) {
        setTimeout(newTimeout);
      }
      setState(text);
    };
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setState('');
    }, timeout);
    return () => clearTimeout(t);
  }, [state]);

  return (
    <AnimatePresence>
      {state && (
        <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} className={cl.notificationContainer}>
          {state}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
