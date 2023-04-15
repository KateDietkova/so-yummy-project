import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import {
  UserLogoBtnWrapper,
  UserLogoBtn,
  UserAvatarWrapper,
} from './UserLogo.styled';
import { UserLogoModal } from './UserLogoModal/UserLogoModal';


export const UserLogo = () => {
  const [isOpenUserModal, setisOpenUserModal] = useState(false);
  const userAvatar = null;
  return (
    <UserLogoBtnWrapper>
      <UserLogoBtn onClick={() => setisOpenUserModal(!isOpenUserModal)}>
        <UserAvatarWrapper>
          {userAvatar ? (
            <img src="" alt="" />
          ) : (
            <FiUser size={30} color={'#C4C4C4'} />
          )}
        </UserAvatarWrapper>
        Olena
      </UserLogoBtn>
      <UserLogoModal isOpenUserModal={isOpenUserModal} />
    </UserLogoBtnWrapper>
  );
};
