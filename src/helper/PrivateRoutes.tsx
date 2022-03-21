import { useAppSelector } from 'hooks/useGetData';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';

const PrivateRoutes = () => {
  const {
    data: {
      data: { access_token },
    },
  } = useAppSelector(
    (state) => state.persistedReducer.auth
  );

  return access_token ? (
    <Outlet />
  ) : (
    <Navigate to='/auth/login' />
  );
};

export default PrivateRoutes;
