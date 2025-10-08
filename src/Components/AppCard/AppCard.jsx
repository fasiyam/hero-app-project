import React from 'react';

const AppCard = ({app}) => {
    return (
        <div className='max-w-[348px] border-0 shadow-2xl rounded-xl p-4 bg-white'>
            <img className='w-[316px] h-[316px] mb-4' src={app.image} alt="" />
            <h3 className='text-xl font-medium text-[#001931] mb-4'>{app.title}</h3>

            <div className='flex items-center justify-between'>
                <p className='bg-[#f1f5e8] p-2.5 text-[#00D390]'>{parseInt(parseInt(app.downloads) / 1000000)}M</p>
                <p className='bg-[#f1f5e8] p-2.5 text-[#00D390]'>{app.ratingAvg}</p>
            </div>
        </div>
    );
};

export default AppCard;