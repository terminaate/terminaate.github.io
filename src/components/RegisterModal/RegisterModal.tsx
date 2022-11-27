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
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('auth');

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
      return setLoginError(t('am_e_login-zero-input')!);
    }

    if (loginInput.length < 5) {
      return setLoginError(t('am_e_login-min-length')!);
    }

    if (!passwordInput) {
      return setPasswordError(t('am_e_password-zero-input')!);
    }

    if (passwordInput.length < 7) {
      return setPasswordError(t('am_e_password-min-length')!);
    }

    if (!codeInput) {
      return setCodeError(t('am_e_auth-code-zero-input')!);
    }

    dispatch(
      register({
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
      onExit={onExit}
      contentClassName={cl.registerModal}
      state={registerModal}
      setState={setRegisterModal}
    >
      <h1 className={cl.title}>{t('am_register-title')}</h1>
      <div className={cl.inputsContainer}>
        <Input
          value={loginInput}
          onChange={onLoginChange}
          placeholder={t('am_login-placeholder')!}
          container={true}
        >
          <ErrorMessage error={loginError} />
        </Input>
        <Input
          value={passwordInput}
          onChange={onPasswordChange}
          placeholder={t('am_password-placeholder')!}
          type={'password'}
          container={true}
        >
          <ErrorMessage error={passwordError} />
        </Input>
        <Input
          value={codeInput}
          onChange={onCodeChange}
          placeholder={t('am_auth-code-placeholder')!}
          container={true}
        >
          <button onClick={openCodeModal} className={cl.createCodeButton}>
            {t('am_auth-code-create')}
          </button>
          <ErrorMessage error={codeError} />
        </Input>
      </div>
      <div className={cl.buttonsContainer}>
        <button onClick={openLoginModal} className={cl.loginButton}>
          {t('am_login-link')}
        </button>
        <Button onClick={onRegisterButtonClick} className={cl.registerButton}>
          {t('am_register-button')}
        </Button>
      </div>
    </Modal>
  );
};

export default RegisterModal;
