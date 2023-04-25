import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 32px;

  padding: 10px 10px;

  background-color: ${props => props.theme.colors.accent};
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 20px 20px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
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

export const Container = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 78px;
  }

  @media screen and (min-width: 1440px) {
    gap: 142px;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 343px;

  @media screen and (min-width: 768px) {
    gap: 42px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    gap: 45px;
    width: 1160px;
  }
`;
export const IngredientsItem = styled.li`
  display: flex;

  width: 100%;
`;
