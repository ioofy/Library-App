import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from 'layout/Layout';
import HomePages from 'pages/HomePages/HomePages';
import NotFoundPages from 'pages/404Pages/NotFoundPages';
import LoginPages from 'pages/LoginPages/LoginPages';
import DashboardPages from 'pages/DashboardPages/DashboardPages';
import ProfilePages from 'pages/ProfilePages/ProfilePages';
import ShippingCompsPages from 'pages/ShippingCompsPages/ShippingCompsPages';
import AddShippingCompsPages from 'pages/AddShippingCompsPages/AddShippingCompsPages';
import EditShippingsComps from 'pages/EditShippingCompsPages/EditShippingCompsPages';
import PrivateRoutes from 'helper/PrivateRoutes';

function App() {
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
          <Route element={<PrivateRoutes />}>
            <Route
              path='/dashboard'
              element={<DashboardPages />}
            />
            <Route
              path='/profile'
              element={<ProfilePages />}
            />
            <Route
              path='/shipping-comps'
              element={<ShippingCompsPages />}
            />
            <Route
              path='/add/shipping-comps'
              element={<AddShippingCompsPages />}
            />
            <Route
              path='/edit/shipping-comps/:id&name=:name'
              element={<EditShippingsComps />}
            />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
