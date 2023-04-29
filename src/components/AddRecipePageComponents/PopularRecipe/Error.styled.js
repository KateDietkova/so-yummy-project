import styled from 'styled-components';
import imgBgMobile from '../../../assets/images/mobile/search-page/search-not-found.png';
import imgBgMobileRetina from '../../../assets/images/mobile/search-page/search-not-found-2x.png';
import imgBgTablet from '../../../assets/images/tablet/search-page/search-not-found.png';
import imgBgTabletRetina from '../../../assets/images/tablet/search-page/search-not-found-2x.png';
import imgBgDesktop from '../../../assets/images/desktop/search-page/search-not-found.png';
import imgBgDesktopRetina from '../../../assets/images/desktop/search-page/search-not-found-2x.png';

export const StyledErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: auto;
`;

export const StyledErrorBox = styled.div`
  width: 208px;
  height: 133px;
  background-image: url(${imgBgMobile});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${imgBgMobileRetina});
    }
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
    background-image: url(${imgBgTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgBgTabletRetina});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${imgBgDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgBgDesktopRetina});
      }
    }
  }
`;

export const StyledTextError = styled.p`
  font-family: PoppinsRegular;
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1;
  letter-spacing: -0.02em;

  color: ${props =>
    props.theme.darkTheme ? props.theme.colors.textWhite : '#000000'};
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const StyledTextErrorBold = styled.p`
  font-family: PoppinsSemiBold;
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 1;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xl};
  }

  color: ${props =>
    props.theme.darkTheme ? props.theme.colors.textWhite : '#3e4462'};
`;
