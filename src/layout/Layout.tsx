import React from 'react';
import SideBar from './components/SideBar/SideBar';
// import Footer from './components/FooterComponent/Footer';
import { useLocation } from 'react-router-dom';

type LayoutProps = {
  children: React.ReactNode;
};

// remove this component in homepage
const withOutLayout = [
  '/',
  '/auth/login',
  '/profile',
];

const Layout = (props: LayoutProps) => {
  const { pathname } = useLocation();

  if (withOutLayout.includes(pathname)) {
    return <>{props.children}</>;
  }

  return (
    <>
      <SideBar
        children={
          <div className='wrapper-all'>
            {props.children}
          </div>
        }
      />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
