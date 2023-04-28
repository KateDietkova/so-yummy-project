import styled from 'styled-components';
import { Container } from '../../components/universalComponents/Container/Container.styled';

export const MyFavoriteContainer = styled(Container)`
  position: relative;
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite};
`;

export const RecipeListContainer = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 100px;
  }
`;

