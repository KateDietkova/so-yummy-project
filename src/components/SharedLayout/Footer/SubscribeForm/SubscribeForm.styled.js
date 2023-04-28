import styled from 'styled-components';
import { AiOutlineMail } from "react-icons/ai";


export const Form = styled.div`
    position: relative;
    flex-direction: column;
    display: flex;

@media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-top: 72px;
    margin-right: 131px;
    margin-left: 131px;
}

@media screen and (min-width: 1280px) {
    margin: 0px;
    flex-direction: column;
}
`

export const SubscribeInput = styled.input`
    display: inline;
    width: 204px;
    height: 38px;
    font-family: 'PoppinsRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    border: 1px solid ${props => props.theme.colors.textWhite};
    outline: none;
    opacity: 0.5;
    border-radius: 6px;
    background-color: transparent;
    padding: 0px;
    margin: 0px;
    margin-bottom: 8px;
    color: ${props => props.theme.colors.textWhite};
    padding-left: 42px;
    transition: opacity ${props => props.theme.effects.mainEffect};

  @media screen and (min-width: 768px) {
    width: 259px;
    height: 50px;
    margin-right: 12px;
    margin-bottom: 0px;
    font-size: ${props => props.theme.fontSizes.s};
    padding-left: 51px;
  }

  @media screen and (min-width: 1280px) {
    width: 338px;
    height: 59px;
    margin-right: 0px;
    margin-bottom: 16px;
    font-size: ${props => props.theme.fontSizes.l};
    padding-left: 52px;
}


  :hover,
  :focus {
      opacity: 1;
  &::placeholder {
      opacity: 1;
    }
  }

::placeholder {
    font-family: 'PoppinsRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    opacity: 1;
    color: ${props => props.theme.colors.textWhite};

    transition: opacity ${props => props.theme.effects.mainEffect};

    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.s};
    }

    @media screen and (min-width: 1280px) {
      font-size: ${props => props.theme.fontSizes.l};
    }
}

`;

export const IconMail = styled(AiOutlineMail)`
    position: absolute;
    color: ${props => props.theme.colors.textWhite};
    width: 16px;
    height: 12px;
    top: 13px;
    left: 14px;
    opacity: 1;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
    top: 17px;
    left: 15px;
  }

@media screen and (min-width: 1280px) {
    width: 20px;
    height: 16px;
    top: 20px;
    left: 16px;
  }
`;

export const SubscribeButton = styled.button`
    width: 204px;
    height: 38px;
    background-color: ${props => {
            return props.theme.darkTheme
                ? props.theme.colors.bgdarkTheme
                : props.theme.colors.accent
    }};
    color: ${props => props.theme.colors.textWhite};
    border: none;
    border-radius: 6px;
    font-family: 'PoppinsRegular';
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.14;
    cursor: pointer;
    padding: 0px;
    margin: 0px;
    transition: color ${props => props.theme.effects.mainEffect};
    

    @media screen and (min-width: 768px) {
        width: 171px;
        height: 50px;
        font-size: ${props => props.theme.fontSizes.m};
        line-height: 1.12;
    }

    @media screen and (min-width: 1280px) {
        width: 339px;
        height: 60px;
    }

    :hover {
        color: ${props => {
            return props.theme.darkTheme
                ? props.theme.colors.accent
                : props.theme.colors.bgBlackDark
}};
    } 
`;

