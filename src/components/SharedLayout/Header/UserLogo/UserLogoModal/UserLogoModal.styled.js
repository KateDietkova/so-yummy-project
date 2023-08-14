import styled from 'styled-components';

export const UserLogoModalContainer = styled.div`
  position: absolute;
  right: 0;
  top: 65px;

  display: flex;
  pointer-events: ${props => {
    return props.isOpenUserModal ? 'auto' : 'none';
  }};
  visibility: ${props => {
    return props.isOpenUserModal ? 'visible' : 'hidden';
  }};
  opacity: ${props => {
    return props.isOpenUserModal ? '1' : '0';
  }};
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 18px;

  background-color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite;
  }};
  border-radius: 8px;
  border: ${props => {
    return props.theme.darkTheme && `1px solid ${props.theme.colors.accent}`;
  }};

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;

  transition: height ${props => props.theme.effects.mainEffect},
    opacity ${props => props.theme.effects.mainEffect},
    visibility ${props => props.theme.effects.mainEffect};

  @media screen and (max-width: 767px) {
    border: 1px solid ${props => props.theme.colors.accent};
    gap: 28px;
  }
`;

export const EditProfileBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 50px;
  background-color: transparent;
  border: ${props => props.theme.borders.none};
  padding: 4px 0;
  cursor: pointer;

  font-family: PoppinsMedium;
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.6;

  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark;
  }};

  @media screen and (max-width: 767px) {
    gap: 37px;
  }
`;
