import React from 'react';
import Modal from '@/components/Modal';
import { useAppDispatch, useAppSelector } from '@/store';
import { initialState, setModal } from '@/store/reducers/modalsSlice';
import cl from './UserModal.module.scss';
import { userAvatarUrl } from '@/http';
import { logout } from '@/store/reducers/user/userSlice';
import { FaDoorOpen } from 'react-icons/all';

const UserModal = () => {
  const { userModal, userModalData } = useAppSelector(
    (state) => state.modalsSlice,
  );
  const { user } = useAppSelector((state) => state.userSlice);
  const isUserOwner = user.id === userModalData?.id;
  const dispatch = useAppDispatch();

  const setUserModal = (state: boolean) => {
    if (!state) {
      dispatch(setModal({ userModal: state, userModalData: null }));
    } else {
      dispatch(setModal({ userModal: state }));
    }
  };

  const onLogoutButtonClick = () => {
    dispatch(logout());
    dispatch(setModal(initialState));
  };

  return (
    <Modal
      contentClassName={cl.userModal}
      state={userModal}
      setState={setUserModal}
    >
      <header className={cl.header}>
        <div className={cl.userInfoContainer}>
          <div className={cl.userImage}>
            <img src={userAvatarUrl + userModalData?.id} alt="" />
          </div>
          <span className={cl.userName}>{userModalData?.login}</span>
        </div>
        {isUserOwner && (
          <div className={cl.userButtonsContainer}>
            <button onClick={onLogoutButtonClick} className={cl.logoutButton}>
              <FaDoorOpen />
            </button>
          </div>
        )}
      </header>
    </Modal>
  );
};

export default UserModal;
