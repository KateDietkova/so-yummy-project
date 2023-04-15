import styled from 'styled-components';
// import { Container } from '../../../components/universalComponents/Container/Container.styled';

export const MainTitleStyled = styled.h1`
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 100px;
  }

  font-family: PoppinsSemiBold;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.xxxxl};
  }

  color: ${props => props.theme.colors.textTitleDark};
`;
