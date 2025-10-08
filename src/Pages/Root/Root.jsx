import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import HeroSection from "../../Components/HeroSection/HeroSection"

const Root = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;