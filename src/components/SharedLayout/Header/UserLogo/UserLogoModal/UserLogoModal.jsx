import { useState } from 'react';
import { UserLogoModalContainer, EditProfileBtn } from './UserLogoModal.styled';
import { FiEdit2 } from 'react-icons/fi';
import { LogoutBtn } from './LogoutBtn/LogoutBtn';
import { UserInfoModal } from './UserInfoModal/UserInfoModal';
import { LogoutModal } from './LogoutModal/LogoutModal';

export const UserLogoModal = ({ isOpenUserModal }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  return (
    <>
      <UserLogoModalContainer isOpenUserModal={isOpenUserModal}>
        <EditProfileBtn onClick={handleShowInfo}>
          Edit profile
          <FiEdit2 size={14} />
        </EditProfileBtn>
        <LogoutBtn onClick={handleShowLogout} />
      </UserLogoModalContainer>
      <UserInfoModal showInfo={showInfo} hide={handleCloseInfo} />
      <LogoutModal show={showLogout} hide={handleCloseLogout} />
    </>
  );
};
