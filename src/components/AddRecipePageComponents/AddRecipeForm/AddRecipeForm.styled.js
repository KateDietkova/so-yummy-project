import styled from 'styled-components';
import { Form } from 'formik';
import { ButtonSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';



export const FormStyled = styled(Form)`
position:relative;
  margin-bottom: 72px;
z-index: 2;
  @media screen and (min-width: 767px) {
    
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
