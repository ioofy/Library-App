import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePages from 'pages/HomePages/HomePages';
import NotFound from 'pages/404Pages/NotFound';
import Layout from 'layout/Layout';
import Login from 'pages/LoginPages/Login';
import Dashboard from 'pages/DashboardPages/Dashboard';
import PrivateRoute from 'helpers/privateRoute';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={HomePages} exact />
          <PrivateRoute
            isAuth={isAuth}
            path='/dashboard'
            component={Dashboard}
            exact
          />
          <Route
            path='/auth/login'
            component={() => <Login setIsAuth={setIsAuth} />}
            exact
          />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
