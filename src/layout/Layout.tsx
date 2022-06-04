import React from "react";
import loadable from "@loadable/component";
import { useLocation } from "react-router-dom";

// const Footer = loadable(() => import('layout/components/Footer/Footer'));
const SideBar = loadable(() => import("layout/components/SideBar/SideBar"));

type LayoutProps = {
  children: React.ReactNode;
};

// remove this component in homepage
const withOutLayout = ["/", "/auth/login", "/my/profile"];

const Layout = (props: LayoutProps) => {
  const { pathname } = useLocation();

  if (withOutLayout.includes(pathname)) {
    return <>{props.children}</>;
  }

  return (
    <>
      <SideBar children={<div className="wrapper-all">{props.children}</div>} />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
