import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonSkewStyled = styled.button`
  background-color: ${props => {
    return props.color ? props.color : props.theme.colors.accent;
  }};
  border: ${props => props.theme.borders.none};
  transform: skew(15deg, 0);
  border-radius: 1.7rem;
  cursor: pointer;
  padding: ${props => {
    return props.padding ? props.padding : '12px 32px';
  }};
  width: ${props => {
    return props.width ? props.width : '141px';
  }};

  font-family: PoppinsRegular;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;

  color: ${props => props.theme.colors.textWhite};
  transition: background-color ${props => props.theme.effects.mainEffect};

  &:hover {
    background-color: ${props => {
      return props.hoverColor
        ? props.hoverColor
        : props.theme.colors.bgBlackDark;
    }};
  }

  .inner {
    /* transform: skew(-15deg, 0); */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  @media screen and (max-width: 767px) {
    width: 125px;
    padding: 12px 24px;
  }

  @media screen and (min-width: 768px) {
    box-shadow: ${props => {
      return props.isShadow ? '0 4px 3px 0 rgba(0, 0, 0, 0.3)' : 'none';
    }};
  }
`;

export const LinkSkewStyled = styled(NavLink)`
  display: block;
  background-color: ${props => props.theme.colors.accent};
  border: ${props => props.theme.borders.none};
  transform: skew(15deg, 0);
  border-radius: 1.7rem;
  cursor: pointer;
  padding: 12px 32px;
  width: 141px;

  font-family: PoppinsRegular;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;
  text-decoration: none;

  color: ${props => props.theme.colors.textWhite};
  transition: background-color ${props => props.theme.effects.mainEffect};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.textWhite};
    background-color: ${props => props.theme.colors.bgBlackDark};
  }

  .inner {
    transform: skew(-15deg, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;
