import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePages from 'pages/HomePages/HomePages';
import NotFoundPages from 'pages/404Pages/NotFoundPages';
import Layout from 'layout/Layout';
import LoginPages from 'pages/LoginPages/LoginPages';
import DashboardPages from 'pages/DashboardPages/DashboardPages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='*' element={<NotFoundPages />} />
          <Route path='/auth/login' element={<LoginPages />} />
          <Route path='/dashboard' element={<DashboardPages />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
