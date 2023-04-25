import styled from 'styled-components';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 11px;
  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;
  margin-bottom: 40px;

  &:not(:last-child) {
    margin-right: 18px;
  }
`;

export const Page = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  background-color: ${({ active }) => (active ? '#EBF3D4' : 'transparent')};
  border-radius: 50%;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 18px;
  }
`;

export const StyledChevronLeft = styled(BiChevronLeft)`
  font-size: 40px;
  margin-right: 13px;
  fill: rgba(169, 169, 169, 0.73);
  cursor: pointer;
`;

export const StyledChevronRight = styled(BiChevronRight)`
  font-size: 40px;
  margin-left: -5px;
  fill: rgba(169, 169, 169, 0.73);
  cursor: pointer;
`;
