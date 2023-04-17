import styled from 'styled-components';

export const StyledErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 14px;
  color: ${props => props.theme.colors.validateRed};
`;
