import styled from 'styled-components';


export const IngredientsListSection = styled.div`
position:relative;
top:400px;
  width: 100%;
  height:100%;
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
  height: 40px;
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

