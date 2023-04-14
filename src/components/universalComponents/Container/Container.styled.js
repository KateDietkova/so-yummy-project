import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    width: 768px;
  }

  @media screen and (max-width: 1279px) {
    position: ${props => {
      return props.ismobile && 'relative';
    }};
    height: ${props => {
      return props.ismobile && '100%';
    }};
  }

  @media screen and (min-width: 1280px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 1280px;
  }
`;
