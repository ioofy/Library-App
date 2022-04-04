import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from 'utils/getToken';

const PrivateRoutes = () => {
  return getToken ? <Outlet /> : <Navigate to='/auth/login' />;
};

export default PrivateRoutes;
