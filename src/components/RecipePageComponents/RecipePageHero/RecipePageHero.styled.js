
import styled from "styled-components";
import bgMobile from "assets/images/mobile/recipe-page/bg-recipe.jpg";
import bgMobileX2 from "assets/images/mobile/recipe-page/bg-recipe-2x.png";
import bgTablet from "assets/images/tablet/recipe-page/bg-recipe.jpg";
import bgTabletX2 from "assets/images/tablet/recipe-page/bg-recipe-2x.jpg";
import bgDesktop from "assets/images/desktop/recipe-page/bg-recipe.jpg";
import bgDesktopX2 from "assets/images/desktop/recipe-page/bg-recipe-2x.jpg";


export const SectionHero = styled.div`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position:absolute;
  top:0;
  // z-index:0;
  width:100%;
  height:455px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobileX2});
  }
  @media (min-width: 768px) {
    background-image: url(${bgTablet});
    height: 495px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTabletX2});
    }
  }
  @media (min-width: 1280px) {
    background-image: url(${bgDesktop});
    height:493px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDesktopX2});
    }
  }
`;

export const SectionHeroTitle = styled.h1`
  // max-width:360px;
  margin-right:auto;
  margin-left:auto;
  padding-left: 50px;
  padding-right: 50px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 24px;
  }
`;

export const RecipeDescription = styled.p`
  max-width:300px;
  margin-right:auto;
  margin-left:auto;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #22252a;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    max-width:506px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    width:656px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 24px 44px;
  border: 1px solid ${props => props.theme.colors.accentGreen};
  font-size: 10px;
  line-height: 1.5;
  padding: 10px 18px;
  color: #22252a;
  margin-bottom: 42px;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1850ms;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 330px;
    margin-bottom: 60px;
    padding: 18px 44px;
    border: 2px solid ${props => props.theme.colors.accentGreen};
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: 48px;
  }
  &:hover,
  &:focus {
    background-color: #8baa36;
    color: #fafafa;
  }
`;

export const RecipeTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 14px;
    margin-right: 4px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      margin-right: 8px;
    }
  }
`;

export const RecipeTime = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: #23262a;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;