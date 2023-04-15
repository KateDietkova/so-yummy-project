import styled from 'styled-components';
import imgMobile from '../../../../assets/images/mobile/mobile-menu/spinach-leaves-mobile-menu.png';
import imgTablet from '../../../../assets/images/tablet/mobile-menu/spinach-tablet.png';
import imgMobileRetina from '../../../../assets/images/mobile/mobile-menu/spinach-leaves-mobile-menu-2x.png';
import imgTabletRetina from '../../../../assets/images/tablet/mobile-menu/spinach-tablet-2x.png';

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.bgLightGreen;
  }};
  background-image: url(${imgMobile});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 320px;
  transform: ${props => {
    return props.isOpen ? 'translateY(0)' : 'translateY(-100%)';
  }};
  padding-top: 182px;

  transition: transform ${props => props.theme.effects.mainEffect};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${imgMobileRetina});
    }
  }

  @media screen and (min-width: 768px) {
    background-image: url(${imgTablet});
    background-size: 560px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgTabletRetina});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
