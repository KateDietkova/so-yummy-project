
import { SubTitleStyled } from "../AddRecipeForm/RecipeIngridientsFields/RecipeIngridientsFields.styled";
import { StyledFollowUsBlock } from "./FollowUs.styled";
// import { FollowUs } from "components/FollowUs/FollowUs";

// export const FollowUsBlock = () => {

//     return (
//         <StyledFollowUsBlock>
//         <SubTitleStyled>Follow us</SubTitleStyled>
//    <FollowUs  width={"26px"}  />
//         </StyledFollowUsBlock>
//     )
// }


import React from 'react';
import { ReactComponent as Facebook } from '../../../assets/svg/social-networks/facebook.svg';
import { ReactComponent as Youtube } from '../../../assets/svg/social-networks/youtube.svg';
import { ReactComponent as Twitter } from '../../../assets/svg/social-networks/twitter.svg';
import { ReactComponent as Instagram } from '../../../assets/svg/social-networks/insta.svg';
import { SocialMediaList, Link } from './FollowUs.styled';

export const FollowUsBlock = () => {
    return (
        <StyledFollowUsBlock>
              <SubTitleStyled>Follow us</SubTitleStyled>
           
             
        <div>
            <SocialMediaList>
                <li>      
                    <Link href="https://www.facebook.com/" >
                        <Facebook width="26" height="26"/>
                    </Link>

                </li>
                <li>
                    <Link href="https://www.youtube.com/">
                            <Youtube width="28" height="22"/>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.twitter.com/">
                            <Twitter width="25" height="22"/>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/">
                            <Instagram width="24" height="24"/>
                    </Link>
                </li>
            </SocialMediaList>
        </div>  </StyledFollowUsBlock>
    )
}
