import { ReactComponent as BurgerMenuIcon } from '../../../../../assets/svg/other/burger-menu.svg';
import { BurgerMenuBtnStyled } from './BurgerMenuBtn.styled';
import { useSelector } from 'react-redux';

import { VscChromeClose } from 'react-icons/vsc';

export const BurgerMenuBtn = ({ isOpen, setIsOpen }) => {
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BurgerMenuBtnStyled onClick={() => openMenu()}>
      {isOpen ? (
        <VscChromeClose size={24} color={darkTheme ? 'fafafa' : '#23262A'} />
      ) : (
        <BurgerMenuIcon />
      )}
    </BurgerMenuBtnStyled>
  );
};
