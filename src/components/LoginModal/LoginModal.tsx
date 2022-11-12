import React from 'react';
import Modal from '@/components/Modal/Modal';
import cl from './LoginModal.module.scss';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import useInputState from '@/hooks/useInputState';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';

const LoginModal = () => {
  const [loginInput, onLoginChange, setLoginInput] = useInputState('');
  const [passwordInput, onPasswordChange, setPasswordInput] = useInputState('');
  const [codeInput, onCodeChange, setCodeInput] = useInputState('');
  const { loginModal } = useAppSelector(state => state.modalsSlice);
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

  const onExit = () => {
    setLoginInput('');
    setPasswordInput('');
    setCodeInput('');
  };

  return (
    <Modal onExit={onExit} state={loginModal} setState={setLoginModal}>
      <div className={cl.inputsContainer}>
        <Input value={loginInput} onChange={onLoginChange} placeholder={'Login'} />
        <Input value={passwordInput} onChange={onPasswordChange} placeholder={'Password'} />
        <Input container={true} value={codeInput} onChange={onCodeChange} placeholder={'Auth code'}>
          <button onClick={openCodeModal} className={cl.createCodeButton}>Create auth code</button>
        </Input>
      </div>
      <div className={cl.buttonsContainer}>
        <button onClick={openRegisterModal} className={cl.registerButton}>Don't have account? Register</button>
        <Button className={cl.loginButton}>Login</Button>
      </div>
    </Modal>
  );
};

export default LoginModal;