import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import HomePages from 'pages/HomePages/HomePages';
import NotFoundPages from 'pages/404Pages/NotFoundPages';
import Layout from 'layout/Layout';
import LoginPages from 'pages/LoginPages/LoginPages';
import DashboardPages from 'pages/DashboardPages/DashboardPages';
import ProfilePages from 'pages/ProfilePages/ProfilePages';

function App() {
  const getToken = localStorage.getItem('token');

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<HomePages />}
          />
          <Route
            path='*'
            element={<NotFoundPages />}
          />
          <Route
            path='/auth/login'
            element={<LoginPages />}
          />
          {getToken && (
            <Route
              path='/dashboard'
              element={<DashboardPages />}
            />
          )}
          {getToken && (
            <Route
              path='/profile'
              element={<ProfilePages />}
            />
          )}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
