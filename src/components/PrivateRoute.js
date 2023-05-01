import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const location = useLocation();

  const shoudRedirect = !isLoggedIn && !isRefreshing;

  return shoudRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} />
  ) : (
    Component
  );
};
