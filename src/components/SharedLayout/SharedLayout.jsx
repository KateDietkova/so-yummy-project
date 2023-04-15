import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/SharedLayout/Header/Header';
import { Footer } from 'components/SharedLayout/Footer/Footer';
import { ContainerThemeWrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <ContainerThemeWrapper>
      <Header />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Footer />
    </ContainerThemeWrapper>
  );
};
