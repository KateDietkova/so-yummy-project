import styled from 'styled-components';
// import { FollowUs } from "components/FollowUs/FollowUs";

export const StyledFollowUsBlock = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 100px;
   
    
    
  }
`

// export const StyledFollowUs = styled(FollowUs)`
//   @media screen and (max-width: 767px) {
   
//   }
//   @media screen and (min-width: 768px) {

//   margin-top: 40px;
//   transform: scale(2);
    
//   }`


 

export const SocialMediaList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 119px;
    margin: 0;
    padding: 0;
    gap: 14px;
    width: 119px;
    margin-top: 44px;
    

    @media screen and (min-width: 768px) {
        margin-top: 38px;
        width: 134px;
        gap: 18px;
      }

    @media screen and (min-width: 1440px) {
        margin-top: 41px;
      }
`

export const Link = styled.a`

    fill: ${props => {
        return props.theme.darkTheme
            ? props.theme.colors.textWhite
            : props.theme.colors.accent
}};
    transition: fill ${props => props.theme.effects.mainEffect};
    
    :hover, :focus {
        fill: ${props => {
            return props.theme.darkTheme
                ? props.theme.colors.accent
                : props.theme.colors.bgdarkTheme
    }};
}
`