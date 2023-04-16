import styled from 'styled-components';

export const UserLogoBtnWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const UserLogoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;

  border: ${props => props.theme.borders.none};
  background-color: transparent;

  font-family: PoppinsSemiBold;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.7;
  color: ${props => props.theme.colors.textDark};
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.bgGray};
`;
