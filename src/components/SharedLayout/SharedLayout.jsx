import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/SharedLayout/Header/Header';
import { Footer } from 'components/SharedLayout/Footer/Footer';
import { ContainerThemeWrapper } from './SharedLayout.styled';

export const SharedLayout = ({ setDarkTheme, darkTheme}) => {
  return (
    <ContainerThemeWrapper darkTheme={darkTheme}>
      <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Footer />
    </ContainerThemeWrapper>
  );
};
