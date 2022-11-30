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
import { useTranslation } from 'react-i18next';

const LoginModal = () => {
  const [loginInput, onLoginChange, setLoginInput] = useInputState('');
  const [passwordInput, onPasswordChange, setPasswordInput] = useInputState('');
  const [loginError, setLoginError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const { loginModal } = useAppSelector((state) => state.modalsSlice);
  const { authorized } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('auth');

  const setLoginModal = (state: boolean) => {
    dispatch(setModal({ loginModal: state }));
  };

  const resetData = () => {
    setLoginInput('');
    setPasswordInput('');
    setLoginError('');
    setPasswordError('');
  };

  const onLoginButtonClick = () => {
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

    dispatch(
      login({
        login: loginInput,
        password: passwordInput,
      }),
    );
  };

  useEffect(() => {
    dispatch(setModal({ loginModal: false }));
  }, [authorized]);

  return (
    <Modal
      contentClassName={cl.loginModal}
      onExit={resetData}
      state={loginModal}
      setState={setLoginModal}
    >
      <h1 className={cl.title}>{t('am_login-title')}</h1>
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
      </div>
      <Button onClick={onLoginButtonClick} className={cl.loginButton}>
        {t('am_login-button')}
      </Button>
    </Modal>
  );
};

export default LoginModal;
