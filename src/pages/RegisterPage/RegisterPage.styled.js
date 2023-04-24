import styled from 'styled-components';
import { Container } from 'components/universalComponents/Container/Container.styled';
import imgAuthMobile from '../../assets/images/mobile/register-page/bg-register-dark.png';
import imgAuthMobileRetina from '../../assets/images/mobile/register-page/bg-register-dark-2x.png';
import imgAuthTablet from '../../assets/images/mobile/register-page/bg-register-dark.png';
import imgAuthTabletRetina from '../../assets/images/mobile/register-page/bg-register-dark-2x.png';
import imgAuthDesktop from '../../assets/images/mobile/register-page/bg-register-dark.png';
import imgAuthDesktopRetina from '../../assets/images/mobile/register-page/bg-register-dark-2x.png';

import imgOrderFood from '../../assets/svg/register-page-content/register-content.svg';
import imgOrderFoodTablet from '../../assets/svg/register-page-content/register-content-tablet.svg';

export const AuthPagesSection = styled.section`
  min-height: 100vh;
  background-image: url(${imgAuthMobile});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100% 490px;
  padding-top: 305px;
  padding-bottom: 140px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${imgAuthMobileRetina});
    }
  }

  @media screen and (min-width: 768px) {
    background-image: url(${imgAuthTablet});
    background-size: 100% 606px;
    padding-top: 443px;
    padding-bottom: 120px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgAuthTabletRetina});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${imgAuthDesktop});
    background-size: 100% 325px;
    padding-top: 122px;
    padding-bottom: 185px;
    display: flex;
    align-items: flex-end;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgAuthDesktopRetina});
      }
    }
  }

  @media screen and (max-width: 1279px) {
    /* padding-bottom: 125px; */
    min-height: 100vh;
    display: flex;
  }
`;

export const BgOrderFoodImg = styled.div`
  width: 285px;
  height: 250px;
  background-image: url(${imgOrderFoodTablet});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100% 250px;
  z-index: -1;

  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
    background-size: 100% 359px;
  }
  @media screen and (max-width: 767px) {
    top: -220px;
    left: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: -340px;
    left: 50px;
  }

  @media screen and (max-width: 1279px) {
    position: absolute;
  }

  @media screen and (min-width: 1280px) {
    width: 532px;
    height: 468px;
    background-size: 100% 468px;
    background-image: url(${imgOrderFood});
    z-index: 1;
  }
`;

export const ContainerAuthPageStyled = styled(Container)`
  /* position: absolute; */
  /* bottom: 180px; */
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  /* @media screen and (min-width: 768px) {
  } */

  @media screen and (max-width: 1279px) {
    /* bottom: 125px; */
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 115px;
  }
`;
