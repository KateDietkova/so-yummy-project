import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import {
  UserLogoBtnWrapper,
  UserLogoBtn,
  UserAvatarWrapper,
  UserAvatarImg,
} from './UserLogo.styled';
import { UserLogoModal } from './UserLogoModal/UserLogoModal';
import { useAuth } from 'hooks/useAuth';
import { useLocation } from 'react-router-dom';

export const UserLogo = () => {
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);
  const {
    user: { name: userName, avatarUrl },
  } = useAuth();
  const location = useLocation();
  const isDarkColorMain = location.pathname === '/';
  const isDarkColorRecipe = location.pathname.includes('recipe');

  const userAvatar = avatarUrl || null;
  return (
    <UserLogoBtnWrapper>
      <UserLogoBtn
        onClick={() => setIsOpenUserModal(!isOpenUserModal)}
        darkcolormain={isDarkColorMain ? 'true' : 'false'}
        darkcolorrecipe={isDarkColorRecipe ? 'true' : 'false'}
      >
        <UserAvatarWrapper>
          {userAvatar ? (
            <UserAvatarImg src={userAvatar} alt="user avatar" />
          ) : (
            <FiUser size={30} color={'#C4C4C4'} />
          )}
        </UserAvatarWrapper>
        {userName ? userName : 'User'}
      </UserLogoBtn>
      <UserLogoModal isOpenUserModal={isOpenUserModal} />
    </UserLogoBtnWrapper>
  );
};
