import React from 'react';
import Modal from '@/components/Modal';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';

const UserModal = () => {
  const { userModal, userModalData } = useAppSelector(state => state.modalsSlice);
  const dispatch = useAppDispatch();

  const setUserModal = (state: boolean) => {
    if (!state) {
      dispatch(setModal({ userModal: state, userModalData: null }));
    } else {
      dispatch(setModal({ userModal: state }));
    }
  };


  // todo
  // do this a logout button

  return (
    <Modal state={userModal} setState={setUserModal}>
      User modal {userModalData?.login}
    </Modal>
  );
};

export default UserModal;