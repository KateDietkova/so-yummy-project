import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin: 0;
    margin-right: 62px;
  }
  @media screen and (min-width: 1280px) {
    gap: 24px;
    margin-right: 235px;
    width: 89px;
  }
`;

export const Link = styled(NavLink)`
    font-family: 'PoppinsMedium';
    font-size: ${props => props.theme.fontSizes.s};
    font-weight: 500;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.textWhite};
    transition: color ${props => props.theme.effects.mainEffect};

    :hover {
      color: ${props => {
            return props.theme.darkTheme
                ? props.theme.colors.bgdarkTheme
                : props.theme.colors.accent
    }};
    }
`
