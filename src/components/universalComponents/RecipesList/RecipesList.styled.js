import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
    row-gap: 100px;
  }
`;

export const Recipe = styled.li`
  overflow: hidden;
  border-radius: 8px;
  padding: 0;
`;

export const RecipeContainer = styled.div`
  position: relative;
`;

export const Description = styled.div`
  position: absolute;
  left: 18px;
  bottom: 24px;
  padding: 16px;
  width: 307px;
  background: #ffffff;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1440px) {
    width: 268px;
  }
`;

export const RecipeImg = styled.img`
  width: 100%;
  height: 323px;
  object-fit: cover;
  transition: ${props => props.theme.effects.mainEffect};
`;
