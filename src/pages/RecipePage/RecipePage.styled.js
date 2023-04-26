// import { Container } from 'components/universalComponents/Container/Container.styled';
import styled from 'styled-components';

export const RecipeSection = styled.div`
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite};
`;
