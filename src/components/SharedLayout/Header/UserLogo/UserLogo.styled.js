import styled from 'styled-components';

export const UserLogoBtnWrapper = styled.div`
  position: relative;
  z-index: 2;
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
  color: ${props => {
    if (
      props.theme.darkTheme &&
      (props.darkcolormain === 'true' || props.darkcolorrecipe === 'true')
    ) {
      return props.theme.colors.textDark;
    } else if (props.theme.darkTheme && props.darkcolormain === 'false') {
      return props.theme.colors.textWhite;
    } else {
      return props.theme.colors.textDark;
    }
  }};

  @media screen and (max-width: 1279px) {
    color: ${props => {
      if (props.theme.darkTheme && props.darkcolorrecipe === 'false') {
        return props.theme.colors.textWhite;
      } else {
        return props.theme.colors.textDark;
      }
    }};
  }

  @media screen and (min-width: 1720px) {
    color: ${props => {
      if (props.theme.darkTheme && props.darkcolormain === 'true') {
        return props.theme.colors.textWhite;
      } else if (props.theme.darkTheme && props.darkcolormain === 'false') {
        return props.theme.colors.textWhite;
      } else if (props.theme.darkTheme && props.darkcolorrecipe === 'true') {
        return props.theme.colors.textDark;
      } else {
        return props.theme.colors.textDark;
      }
    }};
  }
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: 44px;
  height: 44px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.bgGray};
`;

export const UserAvatarImg = styled.img`
  display: block;
  width: 44px;
  height: 44px;
`;
