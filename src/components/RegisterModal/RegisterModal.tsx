import React from 'react';
import cl from './RegisterModal.module.scss';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import useInputState from '@/hooks/useInputState';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';
import Modal from '@/components/Modal';

const RegisterModal = () => {
  const [loginInput, onLoginChange, setLoginInput] = useInputState('');
  const [passwordInput, onPasswordChange, setPasswordInput] = useInputState('');
  const [codeInput, onCodeChange, setCodeInput] = useInputState('');
  const { registerModal } = useAppSelector(state => state.modalsSlice);
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
  };

  return (
    <Modal onExit={onExit} state={registerModal} setState={setRegisterModal}>
      <div className={cl.inputsContainer}>
        <Input value={loginInput} onChange={onLoginChange} placeholder={'Login'} />
        <Input value={passwordInput} onChange={onPasswordChange} placeholder={'Password'} />
        <Input container={true} value={codeInput} onChange={onCodeChange} placeholder={'Auth code'}>
          <button onClick={openCodeModal} className={cl.createCodeButton}>Create auth code</button>
        </Input>
      </div>
      <div className={cl.buttonsContainer}>
        <button onClick={openLoginModal} className={cl.loginButton}>Already have account? Login</button>
        <Button className={cl.registerButton}>Register</Button>
      </div>
    </Modal>
  );
};

export default RegisterModal;