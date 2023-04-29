import styled from 'styled-components';

export const PreparationSection = styled.div`
  position:relative;
  top:-100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 16px;
  // margin-bottom: 100px;
  
  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 0 32px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
    display: flex;
    gap: 50px;
    flex-direction: row;
    align-items: center;
    margin: auto;
    margin-bottom: 100px;
    padding: 0 16px;
   
  }
`;
export const Title = styled.h2`
  margin-bottom: 28px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 24px;
  line-height: 1;
  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark;
  }};
  @media screen and (min-width: 768px) {
    letter-spacing: -0.24px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const PrepeaRecipe = styled.ul`
  list-style: none;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    // margin-bottom: 50px;
    gap: 18px;
  }
`;

export const ListItem = styled.li`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.textDark};
  display: flex;
  gap: 14px;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const Steps = styled.span`
 
  width: 21px;
  height: 21px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.accent};
  padding: 0, 7px;

  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.semiBold}; 
  color: ${props => props.theme.colors.textWhite};
  line-height: 1.5;
  
`;
export const Step = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  min-height: 21px;
  color: ${props => props.theme.colors.textWhite};
`;
export const ListText = styled.p`
  line-height: 1.5;
  margin-left: 14px;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark;
  }};
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const PrepeaRecipeImage = styled.img`
  display: block;
  object-fit: contain;
  overflow: hidden;
  border-radius: 8px;
 
`;