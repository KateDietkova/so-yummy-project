import GlobalStyle from 'components/GlobalStyle/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import SigninPage from '../pages/SigninPage/SigninPage';
import { RestrictedRoute } from './RestrictedRoute';
import { VerificationPage } from 'pages/VerificationPage/VerificationPage';
import { PrivateRoute } from './PrivateRoute';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './universalComponents/Loader/Loader';
import { LoaderWrapper } from './App.styled';

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
  const { isRefreshing, isLoading } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={{ ...theme, darkTheme }}>
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {isRefreshing || isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <Routes>
          <Route
            path="/welcome"
            element={
              <RestrictedRoute redirectTo="/" component={<WelcomePage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/" component={<SigninPage />} />
            }
          />

          <Route
            path="verification/:vCode"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<VerificationPage />}
              />
            }
          />
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute redirectTo="/welcome" component={<MainPage />} />
              }
            />
            <Route
              path="categories/:categoryName"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<CategoriesPage />}
                />
              }
            />
            <Route
              path="add"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<AddRecipePage />}
                />
              }
            />
            <Route
              path="favorite"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<FavoritesPage />}
                />
              }
            />
            <Route
              path="recipe/:recipeId"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<RecipePage />}
                />
              }
            />
            <Route
              path="my"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<MyRecipesPage />}
                />
              }
            />
            <Route
              path="search"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<SearchPage />}
                />
              }
            />
            <Route
              path="shopinglist"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<ShopingListPage />}
                />
              }
            />
            <Route
              path="*"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<NotFoundPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};
