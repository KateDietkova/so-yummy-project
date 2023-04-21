import styled from 'styled-components';

export const PreparationSection = styled.div`
position:absolute;
top:600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 0 32px;
    margin-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
    display: flex;
    gap: 50px;
    flex-direction: row;
    align-items: center;
    margin: auto;
    margin-bottom: 200px;
  }
`;
export const Title = styled.h2`
  margin:0;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 28px;
  // padding-left: 120px;
  
  color: ${props => props.theme.colors.textDark};
  @media screen and (min-width: 768px) {
    letter-spacing: -0.24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const PrepeaRecipe = styled.div`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const Steps = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  counter-reset: step;
`;

export const Step = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 14px;
    @media screen and (min-width: 768px) {
      margin-bottom: 18px;
    }
  }
  &::before {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    counter-increment: step;
    content: counter(step);
    margin-right: 14px;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
    color: #ffffff;
    background: #8baa36;
    width: 21px;
    height: 21px;
    border-radius: 50%;
  }
  p {
    flex: 1;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.8);
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.29;
    }
  }
`;

export const PrepeaRecipeImage = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  width: 343px;
  height: 250px;
  @media screen and (min-width: 768px) {
  background-image: url(${props => props.img});
    width: 433px;
    height: 332px;
  }
  @media screen and (min-width: 1440px) {
    width: 433px;
    height: 332px;
  }
`;