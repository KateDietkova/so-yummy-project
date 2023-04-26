import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { VscChromeClose } from 'react-icons/vsc';

export const ModalContainer = styled(Modal)`
  .modal-body {
    padding: 0;
  }
  .modal-content {
    width: 330px;
    height: 179px;
    margin: 0 auto;

    padding: 44px 24px;
    background: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.bgdarkTheme
        : props.theme.colors.textWhite;
    }};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    border: ${props => props.theme.borders.none};
    border-radius: 24px;

    @media screen and (min-width: 768px) {
      width: 480px;
      height: 215px;
      padding: 50px 40px;
    }

    @media screen and (min-width: 1280px) {
      width: 500px;
      border-radius: 30px;
      padding: 50px;
    }
  }
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const CloseIcon = styled(VscChromeClose)`
  width: 20px;
  height: 20px;
  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark;
  }};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const OuestionText = styled.p`
  font-size: 14px;
  line-height: 1.29;

  text-align: center;
  letter-spacing: -0.02em;

  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark;
  }};
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const LogoutBtn = styled.button`
  padding: 14px 18px;
  gap: 8px;
  width: 137px;
  border: none;
  height: 51px;

  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.textWhite};
  border-radius: 6px;
  cursor: pointer;

  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  transition: background-color ${props => props.theme.effects.mainEffect};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.bgBlackDark};
  }

  @media screen and (min-width: 768px) {
    padding: 21px 39px;
    font-size: 16px;
    line-height: 1.12;
    height: 62px;
    width: 192px;
  }
`;

export const CancelBtn = styled.button`
  padding: 14px 18px;
  gap: 8px;
  width: 137px;
  border: 1px solid;
  height: 51px;
  border-color: transparent;

  background-color: ${props => props.theme.colors.bgGray};
  color: ${props => props.theme.colors.textDark};
  border-radius: 6px;
  cursor: pointer;

  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  transition: background-color ${props => props.theme.effects.mainEffect},
    border-color ${props => props.theme.effects.mainEffect},
    color ${props => props.theme.effects.mainEffect};

  :hover,
  :focus {
    background-color: transparent;
    border-color: ${props => props.theme.colors.textDark};
    color: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.textWhite
        : props.theme.colors.textDark;
    }};
  }

  @media screen and (min-width: 768px) {
    padding: 21px 39px;
    font-size: 16px;
    line-height: 1.12;
    height: 62px;
    width: 192px;
  }
`;
