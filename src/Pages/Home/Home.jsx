import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from "../../Components/AppCard/AppCard"
import Navbar from '../../Components/Navbar/Navbar';
import HeroSection from "../../Components/HeroSection/HeroSection"
import StatsSection from '../../Components/StatsSection/StatsSection';

const Home = () => {

    const trendingAppsData = useLoaderData();

    return (
        <div >
            <HeroSection></HeroSection>
            <StatsSection></StatsSection>
            <div className='flex flex-col items-center justify-center mx-8'>
                <h2 className='text-5xl font-bold mb-4 mt-20'>Trending Apps</h2>
                <p className='text-xl text-[#627382] mb-10'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-4'>
                    {
                        trendingAppsData.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div>
                <Link to="/apps">
                    <button className='mt-10 btn btn-primary mb-20'>Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;