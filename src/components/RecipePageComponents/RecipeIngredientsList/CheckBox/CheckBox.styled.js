import styled from "styled-components";
import { ReactComponent as Check } from "../../../../assets/svg/other/checkbox.svg";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  @media (min-width: 768px) {
    border: 2px solid rgba(126, 126, 126, 0.5);
    width: 35px;
    height: 35px;
   
  }
`;

export const CheckBoxSvg = styled(Check)`
  width: 8.74px;
  height: 8.74px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 17px;
    height: 17px;
  }
`;