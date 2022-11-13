import React, { useState } from 'react';
import useInputState from '@/hooks/useInputState';
import { useAppDispatch, useAppSelector } from '@/store';
import Modal from '@/components/Modal';
import { setModal } from '@/store/reducers/modalsSlice';
import cl from './CodeModal.module.scss';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import UsersService from '@/services/UserService';
import { FaCopy } from 'react-icons/all';
import { setNotificationText } from '@/store/reducers/notificationSlice';
import ErrorMessage from '@/components/ErrorMessage';

const CodeModal = () => {
  const [secretInput, onSecretChange, setSecretInput] = useInputState('');
  const [dataInput, onDataChange, setDataInput] = useInputState('');
  const [secretError, setSecretError] = useState<string>('');
  const [dataError, setDataError] = useState<string>('');
  const dispatch = useAppDispatch();
  const { codeModal } = useAppSelector((state) => state.modalsSlice);
  const [result, setResult] = useState<string>('');

  const resetData = () => {
    setSecretInput('');
    setDataInput('');
    setDataError('');
    setSecretError('');
    setResult('');
  };

  const setCodeModal = (state: boolean) => {
    dispatch(setModal({ codeModal: state }));
  };

  const openLoginModal = () => {
    resetData();
    dispatch(setModal({ loginModal: true }));
  };

  const generateCode = async () => {
    setDataError('');
    setSecretError('');

    if (!secretInput) {
      return setSecretError('Input a secret!');
    }

    if (!dataInput) {
      return setDataError('Input a data!');
    }
    let jsonData;

    try {
      jsonData = JSON.parse(dataInput);
    } catch (e) {
      return setDataError('Input a valid json data!');
    }

    if (!dataError && !secretError) {
      const { data } = await UsersService.generateJwt(secretInput, jsonData);
      setResult(data.token);
    }
  };

  const onCopyResultButtonClick = () => {
    navigator.clipboard.writeText(result);
    dispatch(setNotificationText('Result copied to clipboard'));
  };

  return (
    <Modal
      onExit={resetData}
      contentClassName={cl.codeModal}
      state={codeModal}
      setState={setCodeModal}
    >
      <h1 className={cl.title}>Creating auth code</h1>
      {result ? (
        <>
          <h2 className={cl.subtitle}>Result:</h2>
          <Input
            value={result}
            placeholder={'result'}
            container={true}
            containerClassName={cl.resultInputContainer}
          >
            <Button
              onClick={onCopyResultButtonClick}
              className={cl.resultCopyButton}
            >
              <FaCopy />
            </Button>
          </Input>
          <span onClick={resetData} className={cl.resetResult}>
            Reset result
          </span>
          <Button className={cl.loginButton} onClick={openLoginModal}>
            Try to use auth code
          </Button>
        </>
      ) : (
        <>
          <div className={cl.inputsContainer}>
            <Input
              container={true}
              value={secretInput}
              onChange={onSecretChange}
              placeholder={'Secret of token'}
            >
              <ErrorMessage error={secretError} />
            </Input>
            <Input
              container={true}
              className={cl.dataInput}
              value={dataInput}
              onChange={onDataChange}
              placeholder={'Data of token (JSON)'}
            >
              <ErrorMessage error={dataError} />
            </Input>
          </div>
          <Button className={cl.generateButton} onClick={generateCode}>
            Generate
          </Button>
          <span onClick={openLoginModal} className={cl.resetResult}>
            Back to login page
          </span>
        </>
      )}
    </Modal>
  );
};

export default CodeModal;
