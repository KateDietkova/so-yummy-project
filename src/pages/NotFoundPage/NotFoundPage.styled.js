import styled from 'styled-components';
import { Container } from '../../components/universalComponents/Container/Container.styled';
import imgMobileNotFound from '../../assets/images/mobile/not-found-page/not-found.png';
import imgTabletNotFound from '../../assets/images/tablet/not-found-page/not-found.png';
import imgDesktopNotfound from '../../assets/images/desktop/not-found-page/not-found.png';
import imgMobileRetinaNotFound from '../../assets/images/mobile/not-found-page/not-found-2x.png';
import imgTabletRetinaNotFound from '../../assets/images/tablet/not-found-page/not-found-2x.png';
import imgDesktopRetinaNotFound from '../../assets/images/desktop/not-found-page/not-found-2x.png';

export const NotFoundPageContainer = styled(Container)`
  position: relative;
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite};
`;

export const ColumBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-bottom: 203px;
  }
`;

export const NotFoundBgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 259px;
  height: 170px;
  background-image: url(${imgMobileNotFound});
  background-repeat: no-repeat;

  background-size: contain;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${imgMobileRetinaNotFound});
    }
  }

  @media screen and (min-width: 768px) {
    width: 498px;
    height: 327px;
    background-image: url(${imgTabletNotFound});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgTabletRetinaNotFound});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${imgDesktopNotfound});
    width: 498px;
    height: 331px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgDesktopRetinaNotFound});
      }
    }
  }
`;

export const TextNotFound = styled.p`
  ffont-family: PoppinsRegular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  opacity: 0.5;

  letter-spacing: -0.02em;
  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark;
  }};

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const TitleNotFound = styled.h2`
  font-family: PoppinsBold;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  margin-top: 14px;
  margin-bottom: 8px;

  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark;
  }};

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-top: 32px;
    margin-bottom: 14px;
  }
`;
