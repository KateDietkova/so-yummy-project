import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: 50px;
  margin-bottom: 32px;
  padding: 10px 10px;

  background-color: ${props => props.theme.colors.accent};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    padding: 20px 20px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    padding: 21px 40px;
  }
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: 1.5;
  color: ${props => props.theme.colors.textWhite};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.l};
    letter-spacing: 0.03em;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 78px;
  }

  @media screen and (min-width: 1280px) {
    gap: 142px;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 100px;

  gap: 24px;
  width: 343px;

  @media screen and (min-width: 768px) {
    margin-bottom: 200px;
    gap: 42px;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 195px;
    gap: 45px;
    width: 1160px;
  }
`;
export const IngredientsItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  width: 100%;

  border-bottom: 1px solid #e0e0e0;
`;

export const IngredientImgFrame = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 24px;
  border-radius: 6px;
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgBlackLight
      : props.theme.colors.bgLightGreen};

  @media screen and (min-width: 768px) {
    width: 93px;
    height: 97px;
    margin-bottom: 42px;
  }
`;

export const IngredientImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;

  @media screen and (min-width: 768px) {
    width: 81px;
    height: 81px;
  }
`;

export const IngredientTitle = styled.h3`
  font-size: 10px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 1.2;
  color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textBlue};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.5;
  }
`;

export const RemoveBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 20px;
  color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textTitleDark};

  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 15px;
  }

  :hover {
    color: ${props => props.theme.colors.accent};
    transition: ${props => props.theme.effects.mainEffect};
  }
`;

export const IngredientWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const MeasureWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;

  @media screen and (min-width: 768px) {
    gap: 114px;
  }
  @media screen and (min-width: 1280px) {
    gap: 178px;
  }
`;

export const Measure = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 37px;
  min-height: 23px;
  padding: 4px 10px;

  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 10px;
  line-height: 1.5;

  color: ${props => props.theme.colors.textWhite};
  background-color: ${props => props.theme.colors.accent};
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    min-width: 68px;
    min-height: 35px;
    padding: 4px 8px;
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const TextMessage = styled.h3`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: 1.5;
  color: ${props => props.theme.colors.accent};
`;
