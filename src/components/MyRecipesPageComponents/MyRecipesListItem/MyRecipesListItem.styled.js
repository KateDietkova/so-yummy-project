import styled from 'styled-components';
import { ButtonSkew } from 'components/universalComponents/ButtonSkew/ButtonSkew';
import { LinkSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';

import { ReactComponent as DeleteIcon } from '../../../assets/svg/other/camera.svg';

export const RecipeCardWrapper = styled.li`
  display: flex;
  gap: 14px;
  padding: 14px 9px;
  width: 100%;
  height: 152px;
  border-radius: 8px;
  background-color: ${props => {
    return props.theme.darkTheme ? props.theme.colors.bgBlackLight : '#FFFFFF';
  }};

  @media screen and (min-width: 768px) {
    padding: 28px 24px;
    height: 232px;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    height: 404px;
    padding: 40px;
    gap: 54px;
  }
`;

export const InfoCardWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const RecipeTitle = styled.h2`
  margin-bottom: 14px;
  max-width: 149px;
  font-family: PoppinsMedium;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${props => {
    return props.theme.darkTheme ? props.theme.colors.textWhite : '#3e4462';
  }};
  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    max-width: 345px;
    font-size: ${props => props.theme.fontSizes.xl};
  }
  @media screen and (min-width: 1280px) {
    max-width: 735px;
    margin-bottom: 40px;
  }
`;

export const StyledDescription = styled.p`
  /* display: block; */
  /* width: 213px; */
  /* height: 56px; */
  /* overflow: hidden; */
  font-family: PoppinsRegular;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;

  color: ${props => {
    return props.theme.darkTheme
      ? 'rgba(250, 250, 250, 0.6)'
      : props.theme.colors.textDark;
  }};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.29;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.33;
  }
`;

export const StyledPicture = styled.img`
  width: 124px;
  height: 100%;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 228px;
  }
  @media screen and (min-width: 1280px) {
    width: 318px;
  }
`;

export const DeleteButton = styled(DeleteIcon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;

  background-color: ${props => props.theme.colors.accent};

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
  @media screen and (min-width: 1280px) {
    width: 44px;
    height: 44px;
  }
`;

export const StyledTimeText = styled.p`
  font-family: PoppinsMedium;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;

  color: ${props => {
    return props.theme.darkTheme ? props.theme.colors.textWhite : '#3e4462';
  }};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.43;
    letter-spacing: -0.24px;
  }
`;

export const StyledButton = styled(ButtonSkew)`
  background-color: ${props => props.theme.colors.accent};

  &:hover {
    background-color: ${props => props.theme.colors.bgBlackDark};
  }
  width: 87px;
  padding: 6px 14px;

  @media screen and (min-width: 768px) {
    width: 138px;
    padding: 12px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 172px;
    padding: 18px 44px;
  }
`;
