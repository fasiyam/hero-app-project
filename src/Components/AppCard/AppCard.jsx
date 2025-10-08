import React from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router';

const AppCard = ({app}) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/apps/${app.id}`)} className='max-w-[348px] border-0 shadow-2xl rounded-xl p-4 bg-white'>
            <img className='w-[316px] h-[316px] mb-4' src={app.image} alt="" />
            <h3 className='text-xl font-medium text-[#001931] mb-4'>{app.title}</h3>

            <div className='flex items-center justify-between'>
                <p className='bg-[#f1f5e8] p-2.5 text-[#00D390] flex items-center justify-center gap-1.5'><ArrowDownToLine />{parseInt(parseInt(app.downloads) / 1000000)}M</p>
                <p className='bg-[#f1f5e8] p-2.5 text-[#00D390] flex gap-1.5 items-center justify-center'><Star />{app.ratingAvg}</p>
            </div>
        </div>
    );
};

export default AppCard;