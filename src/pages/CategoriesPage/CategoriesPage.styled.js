import { Container } from 'components/universalComponents/Container/Container.styled';
import styled from 'styled-components';

export const CategoriesPageContainer = styled(Container)`
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite};
`;

export const CategoriesWrapper = styled.div`
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-bottom: 150px;
  }
`;
