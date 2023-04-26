import styled from 'styled-components';
import { Field } from 'formik';

export const StyledPreparationField = styled(Field)`
  display: flex;

  font-size: ${props => props.theme.fontSizes.s};
  line-height: 21px;

  line-height: 21px;
  letter-spacing: -0.02em;



  outline: ${props => {
    return props.theme.darkTheme
      ? '1px solid rgba(250, 250, 250, 0.2)'
      : ' none';
  }};

  width: 343px;
  height: 154px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-radius: 6px;

  background-color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : 'rgba(217, 217, 217, 0.16)';
  }};

  color: ${props => {
    return props.theme.darkTheme ? '#d9d9d999' : '#00000080';
  }};
  margin-top: 24px;
  margin-bottom: 18px;

  
&::placeholder{
  color: ${props => {
    return props.theme.darkTheme ? '#d9d9d999' : '#00000080';
  }};
}

  @media screen and (min-width: 768px) {
    width: 505px;
    height: 224px;
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: ${props => props.theme.fontSizes.l};
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const StyledWrapper = styled.div`
  width: 343px;

  margin-top: 67px;
  margin-bottom: 18px;

  outline: none;

  border: none;
  @media screen and (min-width: 768px) {
    width: 398px;
    margin-top: 67px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
