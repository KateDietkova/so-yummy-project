import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  @media screen and (max-width: 1279px) {
    display: ${props => {
      return props.isMobile ? 'block' : 'none';
    }};
  }
`;
export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 0;
  gap: ${props => {
    return props.ismobile && '8px';
  }};

  font-family: PoppinsMedium;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1;
  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.bgBlackDark;
  }};
  text-decoration: none;
  transition: color ${props => props.theme.effects.mainEffect};
  letter-spacing: -0.02em;

  &:hover,
  &:focus,
  &.active {
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xl};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.6;
    padding: 10px 0;
    color: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.textWhite
        : props.theme.colors.textDark;
    }};
    letter-spacing: none;
  }
`;
