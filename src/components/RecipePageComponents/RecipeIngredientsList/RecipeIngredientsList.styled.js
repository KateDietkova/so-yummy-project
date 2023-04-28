import styled from 'styled-components';


export const IngredientsListSection = styled.div`

  padding-top:400px;
  width: 100%;
  // height:100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 50px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    margin-top: 50px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 0;
    padding-right: 0;
    margin-top: 50px;
  }
`;

export const ListTitle = styled.div`
  background: #8baa36;
  border-radius: 8px;
  height: 42px;
  width: 100%;
  padding: 12px 14px;
  
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    height: 60px;
    padding: 21px 32px;
    gap: 38px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1240px;
    padding: 21px 40px;
    gap: 110px;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
   
     width: 1240px;
  }
`;
export const IngedientsItem = styled.li`
  display: flex;
  background-color:${props => {
    return props.theme.darkTheme
      ? props.theme.colors.bgBlackLight
      : props.theme.colors.bgLightGreen
  }};
  
  padding: 14px 12px 14px 14px;
  justify-content: space-between;
  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 33px 40px 33px 40px;
  }
  @media (min-width: 1280px) {
    padding: 27px 66px 27px 58px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  // gap: 12px;

  // @media screen and (min-width: 768px) {
  //   gap: 78px;
  //   &:first-child {
  //     gap: 24px;
  //   }
  // }
  // @media screen and (min-width: 1280px) {
  //   gap: 151px;
  //   &:first-child {
  //     gap: 40px;
  //   }
  // }
`;


export const Image = styled.img`
   width: 57px;
  height: 57px;
`;

export const IngedientsTitle = styled.p`
  
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 12px;
  line-height: 1.16;
  max-width: 200px;
  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark;
  }};
  @media (min-width: 768px) {
    max-width: 220px;
    font-size: 24px;
    line-height: 1;
  }
  @media (min-width: 1280px) {
    max-width: 420px;
  }
`;

export const IngedientsMeasure = styled.div`
  width: 68px;
  // height: 35px;
  display: flex;
  justify-content: center;
  text-align:center;
  align-items: center;
  margin-right: 28px;
  border-radius: 4px;
  padding: 4px 4px;
  background-color: ${props => props.theme.colors.accent};
  
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 10px;
  line-height: 1.5;
  color: ${props => props.theme.colors.textWhite};
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    padding: 4px 8px;
    margin-right: 86px;
    
  }
  @media (min-width: 1280px) {
    margin-right: 151px;
    padding: 4px 8px;
   
  }
`;




export const ListSpan = styled.span`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.03em;
  color: ${props => props.theme.colors.textWhite};
  &:first-child {
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

