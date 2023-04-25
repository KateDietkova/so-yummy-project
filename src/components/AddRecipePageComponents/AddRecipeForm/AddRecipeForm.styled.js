import styled from 'styled-components';
import { Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  gap: 32px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 67px;
    margin-top: 22px;
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
