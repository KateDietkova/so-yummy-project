import { useState } from 'react';
import { UserLogoModalContainer, EdidProfileBtn } from './UserLogoModal.styled';
import { FiEdit2 } from 'react-icons/fi';
import { LogoutBtn } from './LogoutBtn/LogoutBtn';
import { UserInfoModal } from './UserInfoModal/UserInfoModal';
import { LogoutModal } from './LogoutModal/LogoutModal';
import { useSelector } from 'react-redux';

export const UserLogoModal = ({ isOpenUserModal }) => {
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const [showInfo, setShowInfo] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  return (
    <>
      <UserLogoModalContainer
        isOpenUserModal={isOpenUserModal}
        darkTheme={darkTheme}
      >
        <EdidProfileBtn onClick={handleShowInfo} darkTheme={darkTheme}>
          Edit profile
          <FiEdit2 size={14} />
        </EdidProfileBtn>
        <LogoutBtn onClick={handleShowLogout} />
      </UserLogoModalContainer>
      <UserInfoModal
        showInfo={showInfo}
        hide={handleCloseInfo}
      />
      <LogoutModal
        show={showLogout}
        hide={handleCloseLogout}
      />
    </>
  );
};
