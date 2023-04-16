import {
  BurgerMenuBtnStyled,
  BurgerMenuIconStyled,
} from './BurgerMenuBtn.styled';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

import { VscChromeClose } from 'react-icons/vsc';

export const BurgerMenuBtn = ({ isOpen, setIsOpen }) => {
  const darkTheme = useSelector(selectTheme);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BurgerMenuBtnStyled onClick={() => openMenu()}>
      {isOpen ? (
        <VscChromeClose size={24} color={darkTheme ? 'fafafa' : '#23262A'} />
      ) : (
        <BurgerMenuIconStyled />
      )}
    </BurgerMenuBtnStyled>
  );
};
