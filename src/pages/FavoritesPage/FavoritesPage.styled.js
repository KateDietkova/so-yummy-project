import styled from 'styled-components';
import { Container } from '../../components/universalComponents/Container/Container.styled';

export const MyFavoriteContainer = styled(Container)`
  position: relative;
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite};
`;

export const H3 = styled.h3`
      font-size: ${props => props.theme.fontSizes.s};
    line-height: 1;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    color: ${props => {
          return props.theme.darkTheme
              ? props.theme.colors.textWhite
              : props.theme.colors.bgBlackDark
  }};

     @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.l};
      line-height: 1;
    }
`