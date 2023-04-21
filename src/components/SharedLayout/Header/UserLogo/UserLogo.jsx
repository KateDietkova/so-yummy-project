import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import {
  UserLogoBtnWrapper,
  UserLogoBtn,
  UserAvatarWrapper,
} from './UserLogo.styled';
import { UserLogoModal } from './UserLogoModal/UserLogoModal';
import { useAuth } from 'hooks/useAuth';

export const UserLogo = () => {
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);
  const { user: {name: userName} } = useAuth()

  const userAvatar = null;
  return (
    <UserLogoBtnWrapper>
      <UserLogoBtn onClick={() => setIsOpenUserModal(!isOpenUserModal)}>
        <UserAvatarWrapper>
          {userAvatar ? (
            <img src="" alt="" />
          ) : (
            <FiUser size={30} color={'#C4C4C4'} />
          )}
        </UserAvatarWrapper>
        {userName ? userName : "User"}
      </UserLogoBtn>
      <UserLogoModal isOpenUserModal={isOpenUserModal} />
    </UserLogoBtnWrapper>
  );
};
