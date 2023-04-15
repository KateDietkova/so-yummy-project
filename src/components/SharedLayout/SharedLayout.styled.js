import styled from 'styled-components';

export const ContainerThemeWrapper = styled.div`
  height: 100vh;
  background-color: ${props => {
    return props.theme.darkTheme ? props.theme.colors.bgdarkTheme : '#fff';
  }};
`;
