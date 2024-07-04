import React from 'react'
import Header from '../components/Navbar/Header';
import Footer from '@/components/Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;