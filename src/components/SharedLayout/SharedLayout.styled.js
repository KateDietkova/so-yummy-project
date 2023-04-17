import styled from 'styled-components';

export const ContainerThemeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  background-color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite;
  }};
`;
