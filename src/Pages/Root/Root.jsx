import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HeroSection from "../../Components/HeroSection/HeroSection"
import StatsSection from '../../Components/StatsSection/StatsSection';
import { Outlet, useNavigation } from 'react-router';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';

const Root = () => {

    const navigate = useNavigation()
    const isLoading = navigate.state === "loading";

    return (
        <div className='bg-[#f5f5f5] h-full'>
            <Navbar></Navbar>
            {/* {isLoading && <span className="loading loading-spinner loading-xl"></span> */}
            }
            {/* <main style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}>
                <Outlet></Outlet>
            </main> */}

            {
                !isLoading ? <Outlet></Outlet> : <LoadingScreen></LoadingScreen>
            }

        </div>
    );
};

export default Root;