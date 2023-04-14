import { Navigate } from 'react-router-dom';


export const RedirectRoute = ({ redirectTo = '/' }) => {
  return  <Navigate to={redirectTo} />;
};


