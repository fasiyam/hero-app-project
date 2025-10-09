import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApps, removeFromLS } from '../../utility/LocalStorage';
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const Installation = () => {

    const allAppsData = useLoaderData();
    const installedApps = getStoredApps();
    const installedAppsDetails = allAppsData.filter(app => installedApps.includes(app.id) )


    const [sortedData, setSortedData] = useState(installedAppsDetails);
    
    const handleSorting = (e) => {
        const sortValue = e.target.value;
        
        const data = [...sortedData];

        if(sortValue === 'low-high') {
            data.sort((a,b) => parseInt(a.size) - parseInt(b.size))
        } else if(sortValue === 'high-low') {
            data.sort((a,b) => parseInt(b.size) - parseInt(a.size))
        }
        
        setSortedData(data)
    } 


    const handleUninstall = id => {
        removeFromLS(id);

        const remainingApps = sortedData.filter(app => app.id !== id)
        setSortedData(remainingApps);
    }
    
    
    return (
        <div className=' mx-10 h-[90dvh]'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold text-[#001931] mb-4 mt-10'>Your Installed Apps</h1>
                <p className='text-xl text-[#627382] mb-10'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex items-center justify-between mb-4'>
                    <p>{installedApps.length} Apps Found</p>
                    <select onChange={handleSorting} defaultValue="Sort by size" name="" id="" >
                        <option value="Sort by size" disabled >Sort by size</option>
                        <option value="low-high">low-high</option>
                        <option value="high-low">high-low</option>
                    </select>
                </div>
            </div>

            <div>
                {
                    sortedData.map(app => <div key={app.id} className='my-5 p-4 bg-white shadow-xl flex md:flex-row flex-col items-center md:gap-10 gap-4'>
                    <div>
                        <img className='md:w-[80px] md:h-[80px] w-[120px] h-[120px]' src={app.image} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-medium mb-4 text-center md:text-left'>{app.title}</h2>
                        <div className='flex items-center justify-start gap-4'>
                            <div className='flex items-center justify-center gap-1.5'>
                                <img className='w-[16px]' src={downloadImg} alt="" />
                                <span>{parseInt(parseInt(app.downloads)/1000000)}M</span>
                            </div>
                            <div className='flex items-center justify-center gap-1.5'>
                                <img className='w-[16px]' src={ratingImg} alt="" />
                                <span className='text-[#FF8811]'>{app.ratingAvg}</span>
                            </div>
                            <div>
                                <p>{app.size} MB</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:ml-auto'>
                        <button onClick={() => handleUninstall(app.id)} className='btn bg-[#00d390] text-white'>Uninstall</button>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Installation;