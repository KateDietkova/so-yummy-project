import { useSelector } from 'react-redux';
import {authSelectors} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const user = useSelector(authSelectors.selectUser);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const isLoading = useSelector(authSelectors.selectIsLoading);

  return {
    isLoggedIn,
    user,
    isRefreshing,
    isLoading,
  };
};
