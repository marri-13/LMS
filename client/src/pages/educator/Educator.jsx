import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';
import Footer from '../../components/educator/Footer';

const Educator = () => {
  return (
    <div className="text-default min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-6">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Educator;
