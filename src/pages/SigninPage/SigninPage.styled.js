import styled from 'styled-components';
import {
  ContainerAuthPageStyled,
} from '../RegisterPage/RegisterPage.styled';

export const ContainerSigninPage = styled(ContainerAuthPageStyled)`
  bottom: 170px;

  @media screen and (min-width: 768px) {
    bottom: 175px;
  }

  @media screen and (min-width: 1280px) {
    bottom: 225px;
    align-items: flex-end;
  }
`;
