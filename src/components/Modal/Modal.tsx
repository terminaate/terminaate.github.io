import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, ReactNode, useCallback, useEffect } from 'react';
import cl from './Modal.module.scss';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

export interface IModal {
  state: boolean;
  setState:
    | React.Dispatch<React.SetStateAction<boolean>>
    | ((state: boolean) => void);
  onExit?: () => void;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
}

const Modal: FC<IModal> = ({
  state,
  setState,
  children,
  onExit,
  className,
  contentClassName,
}) => {
  const closeModal = useCallback(() => {
    setState(false);
    if (onExit) {
      onExit();
    }
  }, []);

  useEffect(() => {
    if (!state && onExit) {
      onExit();
    }
  }, [state]);

  return createPortal(
    <AnimatePresence>
      {state && (
        <motion.div
          onMouseDown={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className={classNames(className!, cl.modalScreen)}
        >
          <div
            onMouseDown={(e) => e.stopPropagation()}
            className={classNames(contentClassName!, cl.modalContent)}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Modal;
