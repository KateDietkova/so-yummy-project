import styled from 'styled-components';
import { ReactComponent as BurgerMenuIcon } from '../../../../../assets/svg/other/burger-menu.svg';

export const BurgerMenuBtnStyled = styled.button`
  background-color: transparent;
  border: ${props => props.theme.borders.none};
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1279px) {
    display: block;
    z-index: 5;
  }
`;

export const BurgerMenuIconStyled = styled(BurgerMenuIcon)`
  @media screen and (max-width: 767px) {
    stroke: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.textWhite
        : props.theme.colors.bgBlackDark;
    }};
  }
  @media screen and (min-width: 768px) and (max-width: 879px) {
    stroke: ${props => props.theme.colors.bgBlackDark};
  }

  @media screen and (min-width: 880px) and (max-width: 1279px) {
    stroke: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.textWhite
        : props.theme.colors.bgBlackDark;
    }};
  }
`;
