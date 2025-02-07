
import Footer from '@/myComponents/Footer/Footer';
import Nav from '@/myComponents/NavBar/Nav';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;