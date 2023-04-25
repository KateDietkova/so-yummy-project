import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
    row-gap: 100px;
  }
`;

export const Recipe = styled.li`
  overflow: hidden;
  border-radius: 8px;
  padding: 0;
`;

export const RecipeContainer = styled.div`
  position: relative;
  display: block;
`;

export const Description = styled.div`
  position: absolute;
  left: 18px;
  bottom: 24px;
  padding: 16px;
  width: 307px;
  background: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgBlackLight
      : props.theme.colors.textWhite};
  color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.bgdarkTheme};
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    left: 16px;
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
    width: 268px;
  }

  p {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.25;
    letter-spacing: -0.24px;
    text-align: left;
    height: 20px;
    overflow: hidden;
  }
`;

export const RecipeImg = styled.img`
  width: 343px;
  height: 323px;
  object-fit: cover;
  :hover {
    transition: ${props => props.theme.effects.mainEffect};
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 299px;
    gap: 14px;
  }
`;

export const RecipeNavLink = styled(NavLink)`
  text-decoration: none;
`;
