import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoIconLink = styled(NavLink)`
  width: 44px;
  height: 44px;
  border-radius: ${props => props.theme.radii.roundedSquere};
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.accent};
  z-index: 5;
`;
