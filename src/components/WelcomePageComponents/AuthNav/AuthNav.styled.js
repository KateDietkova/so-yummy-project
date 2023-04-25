import styled from 'styled-components';
import { LinkSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';

export const AuthNavList = styled.ul`
  display: flex;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const AuthNavLink = styled(LinkSkewStyled)`
  padding: 12px 24px;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;
  border-radius: 2.2rem;

  @media screen and (min-width: 768px) {
    padding: 22px 44px;
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.3;
  }
`;

export const AuthNavLinkSignIn = styled(LinkSkewStyled)`
  padding: 10px 24px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 2.2rem;
  border-color: ${props => props.theme.colors.textWhite};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;

  transition: border-color ${props => props.theme.effects.mainEffect},
    color ${props => props.theme.effects.mainEffect},
    background-color ${props => props.theme.effects.mainEffect};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.textWhite};
    color: ${props => props.theme.colors.accent};
    border-color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.3;
  }
`;
