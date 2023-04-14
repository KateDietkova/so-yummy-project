import styled from 'styled-components';
import Switch from 'react-switch';

export const SwitchStyled = styled(Switch)`
  & .react-switch-bg {
    background: #efefef;
    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  }

  & .react-switch-handle {
    background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%) !important;
    filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  }
`;

export const SwitchContainer = styled.div`
  @media screen and (max-width: 767px) {
    left: 16px;
  }

  @media screen and (max-width: 1279px) {
    display: ${props => {
      return props.ismobile ? 'block' : 'none';
    }};
    position: absolute;
    bottom: 32px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 32px;
  }
`;
