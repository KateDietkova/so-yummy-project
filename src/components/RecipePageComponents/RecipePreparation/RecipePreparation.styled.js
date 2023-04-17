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
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 28px;
  padding-left: 120px;
  
  color: ${props => props.theme.colors.textDark};
  @media screen and (min-width: 768px) {
    letter-spacing: -0.24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;