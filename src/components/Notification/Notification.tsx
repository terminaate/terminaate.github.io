import React, { useContext, useEffect } from 'react';
import cl from './Notification.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import NotificationContext from '@/contexts/NotificationContext';

const Notification = () => {
  const {
    state: { text, timeout },
    setState,
  } = useContext(NotificationContext);

  useEffect(() => {
    const t = setTimeout(() => {
      setState({ text: '' });
    }, timeout);

    return () => clearTimeout(t);
  }, [text]);

  return (
    <AnimatePresence>
      {text && (
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cl.notificationContainer}
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
