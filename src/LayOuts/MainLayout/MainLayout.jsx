import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="container mx-auto border min-h-screen">
            <Outlet/>
        </div>
    );
};

export default MainLayout;