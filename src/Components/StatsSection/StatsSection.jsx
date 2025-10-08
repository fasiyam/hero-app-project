import React from 'react';

const StatsSection = () => {
    return (
        <div className='bg-gradient-to-br from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] py-20'>
            <h2 className='text-3xl p-4 md:text-5xl text-white font-bold mb-10 text-center'>Trusted by Millions, Built for You</h2>

            <div className='flex flex-col md:flex-row items-center justify-center md:gap-12'>
                <div className='text-center space-y-4 mb-4'>
                    <p className='opacity-80 text-white'>Total Downloads</p>
                    <h2 className='text-6xl md:text-6xl font-extrabold text-white'>29.6M</h2>
                    <p className='opacity-80 text-white'>21% more than last month</p>
                </div>
                <div className='text-center space-y-4 mb-4'>
                    <p className='opacity-80 text-white'>Total Reviews</p>
                    <h2 className='text-6xl md:text-6xl font-extrabold text-white'>906K</h2>
                    <p className='opacity-80 text-white'>46% more than last month</p>
                </div>
                <div className='text-center space-y-4 mb-4'>
                    <p className='opacity-80 text-white'>Active Apps</p>
                    <h2 className='text-6xl md:text-6xl font-extrabold text-white'>100+</h2>
                    <p className='opacity-80 text-white'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;