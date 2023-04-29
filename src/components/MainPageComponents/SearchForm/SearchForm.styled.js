import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormSearchMain = styled(Form)`
  position: relative;
  z-index: 1;
  width: 283px;
  display: flex;
  transform: skew(15deg, 0);
  border-radius: 2.1rem;
  border: 1px solid
    ${props => {
      return props.theme.darkTheme ? 'rgba(250, 250, 250, 0.2)' : '#f0f0f0';
    }};

  background: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.bgBlackLight
      : 'transparent';
  }};

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    background: ${props => {
      return props.theme.darkTheme ? props.theme.colors.bgBlackLight : '#fff';
    }};
  }
  @media screen and (min-width: 768px) {
    width: 345px;
    background: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.bgBlackLight
        : 'transparent';
    }};
  }

  @media screen and (min-width: 1280px) {
    width: 491px;
  }
`;

export const FieldSearchMain = styled(Field)`
  outline: none;
  transform: skew(-15deg, 0);
  width: 250px;
  padding: 16px 32px;
  border: none;
  background-color: transparent;

  font-size: 12px;
  line-height: 1.5;
  color: ${props => {
    if (props.reversed && props.theme.darkTheme) {
      return 'rgba(250, 250, 250, 0.5)';
    } else if (props.reversed) {
      return '#3E4462';
    }
    return props.theme.darkTheme
      ? 'rgba(250, 250, 250, 0.5)'
      : props.theme.colors.textGray;
  }};

  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #fafafa !important; /* Цвет фона */
    -webkit-text-fill-color: rgb(62, 68, 98) !important; /* цвет текста */
    color: rgb(62, 68, 98) !important; /* цвет текста */
  }

  @media screen and (min-width: 768px) {
    padding: 16px 17px 17px 38px;
    font-size: 16px;
    width: 198px;
  }

  @media screen and (min-width: 1280px) {
    width: 325px;
    padding: 22px 23px 22px 48px;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: -2px;
  top: -2px;
  max-width: 113px;
  padding: 16px 25px;

  background-color: ${props => {
    if (props.reversed) {
      return props.theme.colors.accent;
    }
    return props.theme.darkTheme
      ? props.theme.colors.accent
      : props.theme.colors.bgBlackDark;
  }};
  border: ${props => props.theme.borders.none};
  border-radius: 2.1rem;
  cursor: pointer;

  font-family: PoppinsRegular;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;

  color: ${props => props.theme.colors.textWhite};
  transition: background-color ${props => props.theme.effects.mainEffect};

  &:hover {
    background-color: ${props => {
      if (props.reversed) {
        return props.theme.colors.bgBlackDark;
      }
      return props.theme.darkTheme
        ? props.theme.colors.bgBlackDark
        : props.theme.colors.accent;
    }};
  }

  .inner {
    transform: skew(-15deg, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  @media screen and (min-width: 768px) {
    padding: 19px 48px;
    right: -3px;
    top: -1px;
  }

  @media screen and (min-width: 1280px) {
    padding: 25px 47px;
    max-width: 161px;
  }
`;
