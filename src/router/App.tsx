import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout';
import HomePages from 'pages/HomePages/HomePages';
import NotFoundPages from 'pages/404Pages/NotFoundPages';
import LoginPages from 'pages/LoginPages/LoginPages';
import DashboardPages from 'pages/DashboardPages/DashboardPages';
import ProfilePages from 'pages/ProfilePages/ProfilePages';
import ListBooksPages from 'pages/ListBooksPages/ListBookPages';
import AddBooksPages from 'pages/AddBooksPages/AddBooksPages';
import EditBooksPages from 'pages/EditBooksPages/EditBooksPages';
import PrivateRoutes from 'helper/PrivateRoutes';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='*' element={<NotFoundPages />} />
          <Route path='/auth/login' element={<LoginPages />} />
          <Route path='/profile' element={<ProfilePages />} />
          <Route path='/dashboard' element={<DashboardPages />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/books' element={<ListBooksPages />} />
            <Route path='/add/books' element={<AddBooksPages />} />
            <Route path='/edit/book/:id' element={<EditBooksPages />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
