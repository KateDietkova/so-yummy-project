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
  @media screen and (min-width: 1440px) {
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
  @media screen and (min-width: 1440px) {
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
  @media (min-width: 1440px) {
   
     width: 1240px;
  }
`;
export const IngedientsItem = styled.li`
  display: flex;
  background-color: ${props=>props.theme.colors.bgLightGreen};
  padding: 14px 29px 14px 14px;
  justify-content: space-between;
  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 33px 58px 33px 40px;
  }
  @media (min-width: 768px) {
    padding: 27px 70px 27px 58px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 78px;
    &:first-child {
      gap: 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    gap: 151px;
    &:first-child {
      gap: 40px;
    }
  }
`;

export const IngedientsImg = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 12px;
  @media (min-width: 768px) {
    width: 112px;
    height: 112px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 128px;
    height: 128px;
    margin-right: 66px;
  }
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
  color: ${props => props.theme.colors.textDark};
  @media (min-width: 768px) {
    max-width: 220px;
    font-size: 24px;
    line-height: 1;
  }
  @media (min-width: 1440px) {
    max-width: 420px;
  }
`;

export const IngedientsMeasure = styled.span`
  margin-right: 28px;
  border-radius: 4px;
  padding: 4px;
  background-color: ${props => props.theme.colors.accent};
  font-family: "Poppins";
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 10px;
  line-height: 1.5;
  color: ${props => props.theme.colors.textWhite};
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    padding: 4px 8px;
    margin-right: 78px;
  }
  @media (min-width: 1440px) {
    margin-right: 151px;
  }
`;

export const CheckBox = styled.span`
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: transparent;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;


export const ListSpan = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.03em;
  color: #fafafa;
  &:first-child {
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

