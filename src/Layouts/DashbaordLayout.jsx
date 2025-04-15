import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../Sections/Topbar.jsx';
import Sidebar from '../Sections/Sidebar.jsx';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar toggle

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar visibility
  };

  return (
    <div className="dashboard-layout">
      <Topbar onToggleSidebar={toggleSidebar} /> {/* Toggle passed to Topbar */}
      <div className="dashboard-body">
        <Sidebar isSidebarOpen={isSidebarOpen} /> {/* Sidebar gets toggle state */}
        
        {/* Main adjusts based on sidebar state */}
        <main className={`dashboard-main ${isSidebarOpen ? 'with-sidebar' : 'full-width'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
