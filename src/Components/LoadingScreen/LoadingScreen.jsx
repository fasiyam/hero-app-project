import React from 'react';

const LoadingScreen = () => {
    return (
        <div className='h-[90dvh] flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-semibold mb-10'>Loading...</h1>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default LoadingScreen;