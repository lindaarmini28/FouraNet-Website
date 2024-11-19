// src/Dashboard/DashboardLayout.jsx
import React from 'react';
import Sidenav from '../Components/sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidenav />
            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
