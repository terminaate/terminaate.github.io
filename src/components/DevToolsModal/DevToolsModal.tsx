import React, { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import useKeyPress from '@/hooks/useKeyPress';
import Title from '@/components/Title';
import cl from './DevToolsModal.module.scss';
import Checkbox from '@/components/UI/Checkbox';
import { motion } from 'framer-motion';
import useConfigInput from '@/hooks/useConfigInput';
import { Pages } from '@/components/Routing';
import Select from '@/components/UI/Select';
import useNavigate from '@/hooks/useNavigate';
import useRoutingContext from '@/hooks/useRoutingContext';

const PagesVariants = Object.keys(Pages);

const DevToolsModal = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [showCursor, onShowCursorChange] = useConfigInput('showCursor');
  const [showCustomCursor, onShowCustomCursorChange, setShowCustomCursor] =
    useConfigInput('showCustomCursor');
  const [transitionBetweenPages, onTransitionBetweenPagesChange] =
    useConfigInput('transitionBetweenPages');
  const navigate = useNavigate();
  const { currentPage } = useRoutingContext().state;
  const [currentPageInput, setCurrentPageInput] = useState<string>(currentPage);

  useEffect(() => {
    navigate(currentPageInput);
  }, [currentPageInput]);

  useEffect(() => {
    setCurrentPageInput(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!showCursor && !showCustomCursor) {
      setShowCustomCursor(true);
    }
  }, [showCursor, showCustomCursor]);

  useEffect(() => {
    document.body.setAttribute('data-cursor', showCursor + '');
  }, [showCursor]);

  useKeyPress('Period', () => {
    setModalState(true);
  });

  return (
    <Modal
      className={cl.devToolsModal}
      state={modalState}
      setState={setModalState}
    >
      <Title className={cl.title}>
        Welcome to <span className={'circlesText'}>Devtools</span>
      </Title>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, transition: 1 }}
        className={cl.container}
      >
        <div className={cl.inputsContainer}>
          <Checkbox
            title={'Show cursor:'}
            checked={showCursor}
            onChange={onShowCursorChange}
          />
          <Checkbox
            title={'Show custom cursor:'}
            checked={showCustomCursor}
            onChange={onShowCustomCursorChange}
          />
          <Checkbox
            title={'Transition between pages:'}
            checked={transitionBetweenPages}
            onChange={onTransitionBetweenPagesChange}
          />
        </div>
        <div className={cl.navigateContainer}>
          <span>Select page:</span>
          <Select
            variants={PagesVariants}
            currentState={currentPageInput}
            setCurrentState={setCurrentPageInput}
          />
        </div>
      </motion.div>
    </Modal>
  );
};

export default DevToolsModal;
