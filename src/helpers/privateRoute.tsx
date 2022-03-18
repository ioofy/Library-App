import { Redirect, Route, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  isAuth: boolean;
}

const PrivateRoute = ({ isAuth, ...routeProps }: Props) => {
  if (isAuth) {
    return <Route {...routeProps} />;
  }

  return <Redirect to='/auth/login' />;
};

export default PrivateRoute;
