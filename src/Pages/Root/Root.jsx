import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import HeroSection from "../../Components/HeroSection/HeroSection"
import StatsSection from '../../Components/StatsSection/StatsSection';

const Root = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <StatsSection></StatsSection>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;