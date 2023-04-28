import styled from 'styled-components';
import { Container } from '../../components/universalComponents/Container/Container.styled';

export const MyRecipeContainer = styled(Container)`
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

export const StyledText = styled.p`
  font-family: PoppinsMedium;

  font-size: 14px;
  line-height: 1.29;

  text-align: center;
  letter-spacing: -0.02em;

  color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
