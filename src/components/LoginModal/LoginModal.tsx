import React, { useEffect, useState } from 'react';
import Modal from '@/components/Modal/Modal';
import cl from './LoginModal.module.scss';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import useInputState from '@/hooks/useInputState';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';
import ErrorMessage from '@/components/ErrorMessage';
import { login } from '@/store/reducers/user/authAPI';

const LoginModal = () => {
  const [loginInput, onLoginChange, setLoginInput] = useInputState('');
  const [passwordInput, onPasswordChange, setPasswordInput] = useInputState('');
  const [codeInput, onCodeChange, setCodeInput] = useInputState('');
  const [loginError, setLoginError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [codeError, setCodeError] = useState<string>('');
  const { loginModal } = useAppSelector((state) => state.modalsSlice);
  const { authorized } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();

  const setLoginModal = (state: boolean) => {
    dispatch(setModal({ loginModal: state }));
  };

  const openCodeModal = () => {
    dispatch(setModal({ codeModal: true }));
  };

  const openRegisterModal = () => {
    dispatch(setModal({ registerModal: true }));
  };

  const resetData = () => {
    setLoginInput('');
    setPasswordInput('');
    setCodeInput('');
    setLoginError('');
    setPasswordError('');
  };

  const onLoginButtonClick = () => {
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

    dispatch(
      login({
        login: loginInput,
        password: passwordInput,
        authCode: codeInput,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      setModal({ loginModal: false, codeModal: false, registerModal: false }),
    );
  }, [authorized]);

  return (
    <Modal
      contentClassName={cl.loginModal}
      onExit={resetData}
      state={loginModal}
      setState={setLoginModal}
    >
      <h1 className={cl.title}>Sign in</h1>
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
        <button onClick={openRegisterModal} className={cl.registerButton}>
          Don't have account? Register
        </button>
        <Button onClick={onLoginButtonClick} className={cl.loginButton}>
          Login
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;
