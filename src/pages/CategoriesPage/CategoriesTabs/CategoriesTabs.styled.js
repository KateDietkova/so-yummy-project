import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TabsList = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 32px;
  padding: 0 29px;
  gap: 28px;
  border-bottom: ${props => props.theme.borders.normal};
  border-color: #e0e0e0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    gap: 55px;
    margin-bottom: 50px;
    padding: 0 30px;
    border-width: 1px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
`;

export const Tab = styled(NavLink)`
  position: relative;
  display: block;
  padding: 10px 0 32px;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: 1;
  color: #e0e0e0;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
  }
  &.active {
    color: ${props => props.theme.colors.accent};
    &::after {
      background-color: ${props => props.theme.colors.accent};
    }
  }
  &.active {
    color: ${props => props.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
  }
`;
