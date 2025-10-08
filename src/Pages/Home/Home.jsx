import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from "../../Components/AppCard/AppCard"


const Home = () => {

    const trendingAppsData = useLoaderData();
    console.log(trendingAppsData);

    return (
        <div className='flex items-center justify-center mx-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-4'>
                {
                    trendingAppsData.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Home;