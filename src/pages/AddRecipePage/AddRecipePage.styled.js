import styled from 'styled-components';
import { Container } from '../../components/universalComponents/Container/Container.styled';

export const AddRecipeContainer = styled(Container)`
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite};
`;
