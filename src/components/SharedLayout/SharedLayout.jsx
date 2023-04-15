import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/SharedLayout/Header/Header';
import { Footer } from 'components/SharedLayout/Footer/Footer';
import { ContainerThemeWrapper } from './SharedLayout.styled';
import { useSelector } from 'react-redux';

export const SharedLayout = ({ setDarkTheme }) => {
  const darkTheme = useSelector(state => state.theme.darkTheme);
  return (
    <ContainerThemeWrapper darkTheme={darkTheme}>
      <Header/>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Footer />
    </ContainerThemeWrapper>
  );
};
