import styled from 'styled-components';

export const VerifyTitle = styled.h1`
  margin-top: 35px;
  text-align: center;
  padding-bottom: 72px;
  font-family: PoppinsSemiBold;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textTitleDark};

  @media screen and (min-width: 768px) {
    margin-top: 54px;
    padding-bottom: 100px;
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 84px;
    font-size: 44px;
  }
`;
