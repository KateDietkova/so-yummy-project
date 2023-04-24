import styled from 'styled-components';
import {
  ContainerAuthPageStyled,
  AuthPagesSection,
} from '../RegisterPage/RegisterPage.styled';

export const ContainerSigninPage = styled(ContainerAuthPageStyled)`
  /* bottom: 170px;

  @media screen and (min-width: 768px) {
    bottom: 175px;
  } */

  @media screen and (min-width: 1280px) {
    bottom: 225px;
    align-items: flex-end;
  }
`;

export const SigninPageSection = styled(AuthPagesSection)`
  padding-top: 305px;
  padding-bottom: 172px;
  @media screen and (min-width: 768px) {
    padding-top: 443px;
    padding-bottom: 180px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 122px;
    padding-bottom: 220px;
  }
`;
