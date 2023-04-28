import styled from 'styled-components';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const Container = styled.ul`
  position: relative;
  z-index: 2;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 60px;
  background: ${({ theme }) => (theme.darkTheme ? '#2A2C36' : '#fafafa')};
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;

  @media screen and (min-width: 768px) {
    padding: 14px 72px;
  }
`;

export const Page = styled.li`
  font-family: PoppinsSemiBold;
  font-size: 12px;
  line-height: calc(18 / 12);
  color: ${({ active, theme }) => {
    if (theme.darkTheme) {
      return active ? '#FAFAFA' : 'rgba(250, 250, 250, 0.6)';
    }
    return active ? '#22252A' : '#656565';
  }};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  background-color: ${({ active, theme }) => {
    if (theme.darkTheme) {
      return active ? '#8BAA36' : 'transparent';
    }
    return active ? '#EBF3D4' : 'transparent';
  }};
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const StyledChevronLeft = styled(BiChevronLeft)`
  position: absolute;
  top: 50%;
  left: 17px;
  transform: translate(0, -50%);
  margin-right: 13px;
  fill: ${({ theme }) =>
    theme.darkTheme ? 'rgba(250, 250, 250, 0.6)' : 'rgba(169, 169, 169, 0.73)'};
  cursor: pointer;
`;

export const StyledChevronRight = styled(BiChevronRight)`
  position: absolute;
  top: 50%;
  right: 17px;
  transform: translate(0, -50%);
  margin-left: -5px;
  fill: ${({ theme }) =>
    theme.darkTheme ? 'rgba(250, 250, 250, 0.6)' : 'rgba(169, 169, 169, 0.73)'};
  cursor: pointer;
`;
