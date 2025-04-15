import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';

const MainLayout = () => {
  return (
    <>
    <Navbar/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    
    </>
  );
};

export default MainLayout;
