import React from 'react';
import LoginModal from '@/components/LoginModal';
import RegisterModal from '@/components/RegisterModal';
import CodeModal from '@/components/CodeModal';
import UserModal from '@/components/UserModal';

const Modals = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <CodeModal />
      <UserModal />
    </>
  );
};

export default Modals;
