import {
  BurgerMenuBtnStyled,
  BurgerMenuIconStyled,
} from './BurgerMenuBtn.styled';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { useLocation } from 'react-router-dom';

import { VscChromeClose } from 'react-icons/vsc';

export const BurgerMenuBtn = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const isIconBlackInDarkTheme = location.pathname === '/' ? 'true' : 'false';
  const darkTheme = useSelector(selectTheme);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BurgerMenuBtnStyled onClick={() => openMenu()}>
      {isOpen ? (
        <VscChromeClose size={24} color={darkTheme ? 'fafafa' : '#23262A'} />
      ) : (
        <BurgerMenuIconStyled location={isIconBlackInDarkTheme} />
      )}
    </BurgerMenuBtnStyled>
  );
};
