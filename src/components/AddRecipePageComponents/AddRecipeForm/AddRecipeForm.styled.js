import styled from 'styled-components';
import { Form } from 'formik';
import { ButtonSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';

export const FormStyled = styled(Form)`
  display: block;
  gap: 32px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 67px;
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 14px;
  color: ${props => props.theme.colors.validateRed};
`;

export const AddButton = styled(ButtonSkewStyled)`

      width: 129px;
      height: 46px;

  font-size: ${props => props.theme.fontSizes.s}
  color:  ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.accent
      : props.theme.colors.bgBlackDark;
  }};


@media screen and (min-width: 768px) {
  width: 161px;
  height: 52px;
  font-size: ${props => props.theme.fontSizes.m}
}


`;
