import React from 'react';
import useInputState from '@/hooks/useInputState';
import { useAppDispatch, useAppSelector } from '@/store';
import Modal from '@/components/Modal';
import { setModal } from '@/store/reducers/modalsSlice';

const CodeModal = () => {
  const [secretInput, onSecretChange, setSecretInput] = useInputState('');
  const [dataInput, onDataChange, setDataInput] = useInputState('');
  const dispatch = useAppDispatch();
  const { codeModal } = useAppSelector(state => state.modalsSlice);

  const onExit = () => {
    setSecretInput('');
    setDataInput('');
  };

  const setCodeModal = (state: boolean) => {
    dispatch(setModal({ codeModal: state }));
  };

  const openLoginModal = () => {
    dispatch(setModal({ loginModal: true }));
  };

  return (
    <Modal onExit={onExit} state={codeModal} setState={setCodeModal}>

    </Modal>
  );
};

export default CodeModal;