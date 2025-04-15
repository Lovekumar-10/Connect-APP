// src/Layouts/LoginLayouts.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const ForgetPSLayout = () => {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <Outlet />
    </main>
  );
};

export default ForgetPSLayout;
