import styled from 'styled-components';
import imgMobileLeaves from '../../../assets/images/mobile/homepage/spinach-leaves.png';
import imgTabletLeaves from '../../../assets/images/tablet/homepage/spinach-leaves.png';
import imgDesktopLeaves from '../../../assets/images/desktop/homepage/spinach-leaves.png';

import imgMobileRetinaLeaves from '../../../assets/images/mobile/homepage/spinach-leaves-2x.png';
import imgTabletRetinaLeaves from '../../../assets/images/mobile/homepage/spinach-leaves-2x.png';
import imgDesktopRetinaLeaves from '../../../assets/images/desktop/homepage/spinach-leaves-2x.png';

import imgMobileMain from '../../../assets/images/mobile/homepage/main-section.png';
import imgTabletMain from '../../../assets/images/tablet/homepage/main-section.png';
import imgDesktopMain from '../../../assets/images/desktop/homepage/main-section.png';

import imgMobileMainRetina from '../../../assets/images/mobile/homepage/main-section-2x.png';
import imgTabletMainRetina from '../../../assets/images/tablet/homepage/main-section-2x.png';
import imgDesktopMainRetina from '../../../assets/images/desktop/homepage/main-section-2x.png';

export const LeavesBgContainer = styled.div`
  position: absolute;
  top: 0;
  left: -31px;
  z-index: 0;

  width: 75px;
  height: 184px;
  background-image: url(${imgMobileLeaves});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${imgMobileRetinaLeaves});
    }
  }

  @media screen and (min-width: 768px) {
    left: -35px;
    width: 100px;
    height: 315px;
    background-image: url(${imgTabletLeaves});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgTabletRetinaLeaves});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    left: -86px;
    width: 200px;
    height: 390px;
    background-image: url(${imgDesktopLeaves});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgDesktopRetinaLeaves});
      }
    }
  }
`;

export const MainSection = styled.section`
  padding: 144px 0 267px;
`;

export const MainTitle = styled.h1`
  position: relative;
  z-index: 1;
  margin-bottom: 14px;

  font-size: 100px;
  line-height: 1;

  letter-spacing: -0.005em;
  color: ${props => props.theme.colors.textDark};
`;

export const MainTitleAccent = styled.span`
  font-size: 100px;
  line-height: 1;

  letter-spacing: -0.005em;
  color: ${props => props.theme.colors.accent};
`;

export const MainDesc = styled.p`
  position: relative;
  z-index: 1;
  max-width: 465px;
  margin-bottom: 50px;

  font-size: 18px;
  line-height: 1.33;

  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.textDark};
`;

export const MainImgContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;

  width: 375px;
  height: 570px;
  background-image: url(${imgMobileMain});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${imgMobileMainRetina});
    }
  }

  @media screen and (min-width: 768px) {
    width: 420px;
    height: 640px;
    background-image: url(${imgTabletMain});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgTabletMainRetina});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    width: 735px;
    height: 800px;
    background-image: url(${imgDesktopMain});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgDesktopMainRetina});
      }
    }
  }
`;
