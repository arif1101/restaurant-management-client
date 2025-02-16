import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return <>
        <div className='max-w-[1200px] mx-auto'>
            <Navbar></Navbar>
        <div className="min-h-[calc(100vh-200px)]">
        <Outlet></Outlet>
        </div>
        </div>
        <div className='border-t'>
        <Footer></Footer>
        </div>
        
        
        </>
};

export default MainLayout;