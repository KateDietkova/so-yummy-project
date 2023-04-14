import { ReactComponent as BurgerMenuIcon } from '../../../../../assets/svg/other/burger-menu.svg';
import { BurgerMenuBtnStyled } from './BurgerMenuBtn.styled';

import { VscChromeClose } from 'react-icons/vsc';

export const BurgerMenuBtn = ({isOpen, setIsOpen}) => {
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BurgerMenuBtnStyled onClick={() => openMenu()}>
      {isOpen ? <VscChromeClose size={24} /> : <BurgerMenuIcon />}
    </BurgerMenuBtnStyled>
  );
};
