import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionWrapper = styled.div`
  padding: 57px 0 100px;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 100px;
  }

  @media screen and (min-width: 1280px) {
    padding: 100px 0 118px;
  }
`;

export const CategoriesWrapList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }

  @media screen and (min-width: 1280px) {
    gap: 100px;
  }
`;

export const TitleCategories = styled.h2`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 32px;

  color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textTitleDark};

  :hover {
    color: ${props => props.theme.colors.accent};
    transition: ${props => props.theme.effects.mainEffect};
  }

  @media screen and (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
  }
`;

export const WrapperSeeAllBtn = styled.div`
  text-align: right;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 14px;
  }
`;

export const SeeAllBtnLink = styled(Link)`
  display: inline-block;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.28;

  padding: 10px 24px;
  border-radius: 6px;

  background-color: #8aa936;
  color: ${props => props.theme.colors.textWhite};

  :hover {
    color: ${props =>
      props.theme.darkTheme
        ? props.theme.colors.accent
        : props.theme.colors.textWhite};

    background-color: ${props =>
      props.theme.darkTheme
        ? props.theme.colors.bgLightGray
        : props.theme.colors.bgBlackDark};

    transition: ${props => props.theme.effects.mainEffect};
  }
`;

export const OtherCategoriesBtnLink = styled(Link)`
  display: block;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.28;
  background-color: transparent;
  color: ${props => props.theme.colors.accent};
  border-radius: 24px 44px;
  border: 1px solid ${props => props.theme.colors.accent};
  padding: 14px 32px;
  width: 195px;

  :hover {
    color: ${props => props.theme.colors.textWhite};
    background-color: ${props => props.theme.colors.accent};
    transition: ${props => props.theme.effects.mainEffect};
  }

  @media screen and (min-width: 768px) {
    width: 243px;
    padding: 20px 52px;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const WrapperOtherBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
