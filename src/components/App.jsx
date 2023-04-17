import GlobalStyle from 'components/GlobalStyle/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import WellcomePage from '../pages/WelcomePage/WelcomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import SigninPage from '../pages/SigninPage/SigninPage';
import { lazy } from 'react';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const CategoriesPage = lazy(() =>
  import('../pages/CategoriesPage/CategoriesPage')
);

const AddRecipePage = lazy(() =>
  import('../pages/AddRecipePage/AddRecipePage')
);
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage')
);
const RecipePage = lazy(() => import('../pages/RecipePage/RecipePage'));
const MyRecipesPage = lazy(() =>
  import('../pages/MyRecipesPage/MyRecipesPage')
);
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
const ShopingListPage = lazy(() =>
  import('../pages/ShopingListPage/ShopingListPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const { darkTheme } = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={{ ...theme, darkTheme }}>
      <GlobalStyle />
      <Routes>
        <Route path="/wellcome" element={<WellcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="categories/:categoryName" element={<CategoriesPage />} />
          <Route path="add" element={<AddRecipePage />} />
          <Route path="favorite" element={<FavoritesPage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:searchQuery" element={<SearchPage />} />
          <Route path="shopinglist" element={<ShopingListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
