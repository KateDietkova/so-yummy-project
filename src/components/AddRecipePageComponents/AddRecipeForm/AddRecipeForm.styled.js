import styled from 'styled-components';
import { Form } from 'formik';
import { ButtonSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';

export const FormStyled = styled(Form)`
  position: relative;
  margin-bottom: 72px;
  z-index: 2;
  margin-top: 72px;
  @media screen and (min-width: 767px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 200px;
  }
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 14px;
  color: ${props => props.theme.colors.validateRed};
  width: ${props => props.width? props.width : '100%' }
`;

export const AddButton = styled(ButtonSkewStyled)`

      width: 129px;
      height: 46px;

  font-size: ${props => props.theme.fontSizes.s}


  background-color:  ${props => {
    return props.color
     
  }}
  
@media screen and (min-width: 768px) {
  width: 161px;
  height: 52px;
  font-size: ${props => props.theme.fontSizes.m}
}
&:hover {
  background-color:  ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.accent;
  }}}

&:hover .inner {
 color:  ${props => {
   return props.theme.darkTheme
     ? props.theme.colors.accent
     : props.theme.colors.textWhite;
 }}}
`;
