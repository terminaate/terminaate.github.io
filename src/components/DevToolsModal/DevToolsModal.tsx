import { useCallback, useEffect, useState } from 'react';
import { Modal } from '@/components/UI/Modal';
import { useKeyPress } from '@/hooks/useKeyPress';
import { Title } from '@/components/Title';
import cl from './DevToolsModal.module.scss';
import { Checkbox } from '@/components/UI/Checkbox';
import { motion } from 'framer-motion';
import { useConfigInput } from '@/contexts/ConfigContext/hooks/useConfigInput';
import { Pages } from '@/components/Routing';
import { Select } from '@/components/UI/Select';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { ScreenBreakPoints } from '@/common/constants/ScreenBreakPoints';
import { useConfigState } from '@/contexts/ConfigContext/hooks/useConfigState';
import { useConfigActions } from '@/contexts/ConfigContext/hooks/useConfigActions';
import { useRoutingActions } from '@/contexts/RoutingContext/hooks/useRoutingActions';
import { useRoutingState } from '@/contexts/RoutingContext/hooks/useRoutingState';

const PagesVariants = Object.keys(Pages);

export const DevToolsModal = () => {
  const { devToolsModal } = useConfigState();
  const { updateConfig } = useConfigActions();
  const isMobile = useMatchMedia(`(max-width: ${ScreenBreakPoints.MOBILE}px)`);
  const [showCursor, onShowCursorChange] = useConfigInput('showCursor');
  const [showCustomCursor, onShowCustomCursorChange, setShowCustomCursor] =
    useConfigInput('showCustomCursor');
  const [transitionBetweenPages, onTransitionBetweenPagesChange] =
    useConfigInput('transitionBetweenPages');
  const { setCurrentPage: navigate } = useRoutingActions();
  const { currentPage } = useRoutingState();
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

  useKeyPress('Period', () => {
    setModalState(true);
  });

  const setModalState = useCallback(
    (newValue: boolean) => {
      updateConfig({ devToolsModal: newValue });
    },
    [devToolsModal],
  );

  if (isMobile) {
    return null;
  }

  return (
    <Modal
      className={cl.devToolsModal}
      state={devToolsModal}
      setState={setModalState}
    >
      <Title containerClassName={cl.titleContainer} className={cl.title}>
        Welcome to <span>Devtools</span>
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
            containerClassName={cl.checkBoxContainer}
            title={'Cursor:'}
            checked={showCursor}
            onChange={onShowCursorChange}
          />
          <Checkbox
            containerClassName={cl.checkBoxContainer}
            title={'Custom cursor:'}
            checked={showCustomCursor}
            onChange={onShowCustomCursorChange}
          />
          <Checkbox
            containerClassName={cl.checkBoxContainer}
            title={'Pages transition:'}
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
