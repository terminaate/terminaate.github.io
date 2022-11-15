import React, { useEffect, useState } from 'react';
import cl from './RegisterModal.module.scss';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import useInputState from '@/hooks/useInputState';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';
import Modal from '@/components/Modal';
import ErrorMessage from '@/components/ErrorMessage';
import { register } from '@/store/reducers/user/authAPI';

const RegisterModal = () => {
  const [loginInput, onLoginChange, setLoginInput] = useInputState('');
  const [passwordInput, onPasswordChange, setPasswordInput] = useInputState('');
  const [codeInput, onCodeChange, setCodeInput] = useInputState('');
  const [loginError, setLoginError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [codeError, setCodeError] = useState<string>('');
  const { registerModal } = useAppSelector((state) => state.modalsSlice);
  const { authorized } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();

  const setRegisterModal = (state: boolean) => {
    dispatch(setModal({ registerModal: state }));
  };

  const openCodeModal = () => {
    dispatch(setModal({ codeModal: true }));
  };

  const openLoginModal = () => {
    dispatch(setModal({ loginModal: true }));
  };

  const onExit = () => {
    setLoginInput('');
    setPasswordInput('');
    setCodeInput('');
    setLoginError('');
    setPasswordError('');
    setCodeError('');
  };

  const onRegisterButtonClick = () => {
    setLoginError('');
    setPasswordError('');

    if (!loginInput) {
      return setLoginError('Input login!');
    }

    if (loginInput.length < 5) {
      return setLoginError('Min length of input is 5 symbols!');
    }

    if (!passwordInput) {
      return setPasswordError('Input password!');
    }

    if (passwordInput.length < 7) {
      return setPasswordError('Min length of input is 5 symbols!');
    }

    if (!codeInput) {
      return setCodeError('Input code!');
    }

    dispatch(register({
      login: loginInput,
      password: passwordInput,
      authCode: codeInput,
    }));
  };

  useEffect(() => {
    dispatch(
      setModal({ loginModal: false, codeModal: false, registerModal: false }),
    );
  }, [authorized]);


  return (
    <Modal
      onExit={onExit}
      contentClassName={cl.registerModal}
      state={registerModal}
      setState={setRegisterModal}
    >
      <h1 className={cl.title}>Sign up</h1>
      <div className={cl.inputsContainer}>
        <Input
          value={loginInput}
          onChange={onLoginChange}
          placeholder={'Login'}
          container={true}
        >
          <ErrorMessage error={loginError} />
        </Input>
        <Input
          value={passwordInput}
          onChange={onPasswordChange}
          placeholder={'Password'}
          type={'password'}
          container={true}
        >
          <ErrorMessage error={passwordError} />
        </Input>
        <Input
          value={codeInput}
          onChange={onCodeChange}
          placeholder={'Auth code'}
          container={true}
        >
          <button onClick={openCodeModal} className={cl.createCodeButton}>
            Create auth code
          </button>
          <ErrorMessage error={codeError} />
        </Input>
      </div>
      <div className={cl.buttonsContainer}>
        <button onClick={openLoginModal} className={cl.loginButton}>
          Already have account? Login
        </button>
        <Button onClick={onRegisterButtonClick} className={cl.registerButton}>Register</Button>
      </div>
    </Modal>
  );
};

export default RegisterModal;
