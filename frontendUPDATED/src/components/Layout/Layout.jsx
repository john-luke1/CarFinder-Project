import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </Fragment>

  );
};

export default Layout
