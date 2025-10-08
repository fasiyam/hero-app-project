import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HeroSection from "../../Components/HeroSection/HeroSection"
import StatsSection from '../../Components/StatsSection/StatsSection';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <Navbar></Navbar>
            <Suspense fallback={<div>Loding content...</div>}>
                <Outlet></Outlet>
            </Suspense>
        </div>
    );
};

export default Root;