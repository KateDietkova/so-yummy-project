import styled from 'styled-components';

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
