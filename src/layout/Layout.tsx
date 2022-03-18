import React from 'react';
import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <div className='wrapper-all'>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
