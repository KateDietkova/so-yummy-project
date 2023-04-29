import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../../assets/svg/logo/logo.svg';

import mobileBGISmall from '../../../assets/images/mobile/footer/spinach-leaves-small-mobile.png';
import mobileBGISmall2x from '../../../assets/images/mobile/footer/spinach-leaves-small-mobile-2x.png';
import tabletBGISmall from '../../../assets/images/tablet/footer/spinach-leaves-small-tablet.png';
import tabletBGISmall2x from '../../../assets/images/tablet/footer/spinach-leaves-small-tablet-2x.png';
import deskBGISmall from '../../../assets/images/desktop/footer/spinach-leaves-small-desktop.png';
import deskBGISmall2x from '../../../assets/images/desktop/footer/spinach-leaves-small-desktop-2x.png';


import mobileBGIBig from '../../../assets/images/mobile/footer/spinach-leaves-mobile.png';
import mobileBGIBig2x from '../../../assets/images/mobile/footer/spinach-leaves-mobile-2x.png';
import tabletBGIBig from '../../../assets/images/tablet/footer/spinach-leaves-tablet.png';
import tabletBGIBig2x from '../../../assets/images/tablet/footer/spinach-leaves-tablet-2x.png';
import deskBGIBig from '../../../assets/images/desktop/footer/spinach-leaves-desktop.png';
import deskBGIBig2x from '../../../assets/images/desktop/footer/spinach-leaves-desktop-2x.png';

export const FooterWrapper = styled.footer`
    position: relative;
    z-index: 1;
`

export const BackgrImage = styled.div`
    position: absolute;
    top: -210px;
    left: 0;
    background-size: cover;
    background-image: url('${mobileBGIBig}');
    background-repeat: no-repeat;
    width: 256px;
    height: 392px;
    z-index: -1;

    @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        (-webkit-min-device-pixel-ratio: 2),
        screen and (min-resolution: 2dppx) {
        background-image: url(${mobileBGIBig2x});
    }

    @media screen and (min-width: 768px) {
        background-image: url('${tabletBGIBig}');
        top: -355px;
        width: 423px;
        height: 646px;

        @media screen and (min-device-pixel-ratio: 2),
            screen and (min-resolution: 192dpi),
            (-webkit-min-device-pixel-ratio: 2),
            screen and (min-resolution: 2dppx) {
            background-image: url(${tabletBGIBig2x});
        }
    }

    @media screen and (min-width: 1280px) {
       background-image: url('${deskBGIBig}');
       top: -425px;
       width: 558px;
       height: 852px;

        @media screen and (min-device-pixel-ratio: 2),
                screen and (min-resolution: 192dpi),
                (-webkit-min-device-pixel-ratio: 2),
                screen and (min-resolution: 2dppx) {
                background-image: url(${deskBGIBig2x});
        }
    }
`;


export const FooterContainer = styled.div`
    position: relative;
    z-index: 1;
    height: auto;
    padding-top: 28px;
    padding-bottom: 18px;
    background-color: ${props => {
            return props.theme.darkTheme
                ? props.theme.colors.accent
                : props.theme.colors.bgBlackDark
        }};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 64px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;
  }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

@media screen and (min-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

@media screen and (min-width: 1280px) {
    flex-wrap: no-wrap;
    align-items: start;
}
`

export const TextWrapper = styled.div`
    @media screen and (min-width: 768px) {
        margin-right: 173px;
    }

    @media screen and (min-width: 1280px) {
        margin-right: 159px;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    margin-bottom: 32px;
`

export const LogoIconLink = styled.svg`
    width: 32px;
    height: 32px;
    border-radius: 12px;
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.bgLightGreen};

    @media screen and (min-width: 768px) {
        width: 44px;
        height: 44px;
      }
`;

export const Logo = styled(LogoIcon)`
    stroke: ${props => props.theme.colors.accent};
`
export const ProjectName = styled.p`
    font-family: PoppinsBold;
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.015em;
    text-align: left;
    color: ${props => props.theme.colors.textWhite};
    margin-left: 8px;

    @media screen and (min-width: 768px) {
        font-size: 28px;
        margin-left: 12px;
    }
`
export const Benefits = styled.ul`
    display: none;

    @media screen and (min-width: 768px) {
        font-family: 'PoppinsRegular';
        margin-top: 24px;
        font-style: normal;
        font-weight: 400;
        font-size: ${props => props.theme.fontSizes.s};
        line-height: 1.29;
        letter-spacing: -0.02em;
        color: ${props => props.theme.colors.textWhite};
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        padding-left: 20px;
        width: 380px;
    
        li {
            list-style-type: disc;
            list-style-position: outside;
        }
      }
   
      @media screen and (min-width: 1280px) {
        margin-top: 40px;
        font-size: ${props => props.theme.fontSizes.l};
        line-height: 1.33;
        width: 418px;
        padding-left: 30px;
      }

`

export const FooterLicense = styled.div`
    width: 100%;
    padding: 28px 0;
    text-align: center;
    position: relative;
    background-repeat: no-repeat;
    background-position: 100% 100%;

    background-image: url(${mobileBGISmall});
    background-size: 210px 172px;

    @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        (-webkit-min-device-pixel-ratio: 2),
        screen and (min-resolution: 2dppx) {
        background-image: url(${mobileBGISmall2x});
    }

 
  @media screen and (min-width: 768px) {
    padding: 32px 0;
    background-image: url('${tabletBGISmall}');
    background-size: 353px 290px;

    @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        (-webkit-min-device-pixel-ratio: 2),
        screen and (min-resolution: 2dppx) {
        background-image: url(${tabletBGISmall2x});
    }
}

  @media screen and (min-width: 1280px) {
    padding: 50px 0;
    background-image: url('${deskBGISmall}');
    background-size: 424px 348px;

        @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        (-webkit-min-device-pixel-ratio: 2),
        screen and (min-resolution: 2dppx) {
        background-image: url(${deskBGISmall2x});
        }
  }

  p {
    font-size: 10px;
    line-height: 1;
    font-style: normal;
    font-weight: 500;

    letter-spacing: -0.01em;
    color: ${props => {
            return props.theme.darkTheme
                ? props.theme.colors.textWhite
                : props.theme.colors.bgBlackDark
    }};
    opacity: 0.5;

    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.s};
      line-height: 1;
    }
  }

  span {
    font-weight: 400;
    margin-left: 14px;

    @media screen and (min-width: 768px) {
        margin-left: 28px;
      }

    @media screen and (min-width: 1280px) {
        margin-left: 40px;
    }
  }
`;


export const Subscribe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

@media only screen and (min-width: 1280px) {
    width: 339px;
    height: 77px;
}

h3 {
    @media only screen and (max-width: 1279px) {
        display: none;
    }

    display: flex; 
    font-family: 'PoppinsBold';
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.5;
    color: ${props => props.theme.colors.textWhite};
    margin-bottom: 14px;
    
}

p {
    @media only screen and (max-width: 1279px) {
        display: none;
    }

    display: flex; 
    font-family: 'PoppinsRegular';
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.textWhite};
    margin-bottom: 28px;
}
`

