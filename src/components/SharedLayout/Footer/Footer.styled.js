import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../../assets/svg/logo/logo.svg';


export const FooterContainer = styled.div`
    position: relative;
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

  @media screen and (min-width: 1440px) {
    padding-top: 64px;
    padding-left: 100px;
    padding-right: 100px;
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


@media screen and (min-width: 1440px) {
    flex-wrap: no-wrap;
    align-items: start;
}
`

export const TextWrapper = styled.div`
    @media screen and (min-width: 768px) {
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

export const LogoIconLink = styled(NavLink)`
    width: 32px;
    height: 32px;
    border-radius: 6px;
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

export const Benefits = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        font-family: 'PoppinsRegular';
        padding: 0;
        margin: 0;
        margin-top: 24px;

        font-style: normal;
        font-weight: 400;
        font-size: ${props => props.theme.fontSizes.s};
        line-height: 1.29;
        letter-spacing: -0.02em;
        color: ${props => props.theme.colors.textWhite};


        display: flex;
        flex-direction: column;
        gap: 12px;
    
        li {
            text-align: left;
            list-style-position: outside;
            list-style-type: disc;
        }
      }
   
      @media screen and (min-width: 1440px) {
        margin-top: 40px;
        font-size: ${props => props.theme.fontSizes.l};
        line-height: 1.33;
        width: 418px;
      }

`

export const FooterLicense = styled.div`
    width: 100%;
    padding: 28px 0;
    text-align: center;
    background-color: transparent;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 50px 0;
  }

  p {
    font-size: 10px;
    line-height: 1;
    font-style: normal;
    font-weight: 500;

    letter-spacing: -0.01em;
    color: ${props => props.theme.colors.bgBlackDark};
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

    @media screen and (min-width: 1440px) {
        margin-left: 40px;
    }
  }
`;


export const Subscribe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

@media only screen and (min-width: 1440px) {
    width: 339px;
    height: 77px;

}


h3 {
    @media only screen and (max-width: 1439px) {
        display: none;
    }

    font-family: 'PoppinsBold';
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.5;
    color: ${props => props.theme.colors.textWhite};
    margin-bottom: 14px;
    
}

p {
    @media only screen and (max-width: 1439px) {
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

export const BackgrImage = styled.div`

`;
