import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HeroSection from "../../Components/HeroSection/HeroSection"
import StatsSection from '../../Components/StatsSection/StatsSection';
import { Outlet, useNavigation } from 'react-router';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import Footer from '../../Components/Footer/Footer';

const Root = () => {

    const navigate = useNavigation()
    const isLoading = navigate.state === "loading";

    return (
        <div className='bg-[#f5f5f5] h-full'>
            <Navbar></Navbar>
            {
                !isLoading ? <Outlet></Outlet> : <LoadingScreen></LoadingScreen>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;