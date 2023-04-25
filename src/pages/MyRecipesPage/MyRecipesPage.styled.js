import styled from 'styled-components';
import { Container } from '../../components/universalComponents/Container/Container.styled';

export const MyRecipeContainer = styled(Container)`
  position: relative;
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite};
`;
