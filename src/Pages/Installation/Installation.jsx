import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApps, removeFromLS } from '../../utility/LocalStorage';
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { toast, ToastContainer } from 'react-toastify';

const Installation = () => {

    const allAppsData = useLoaderData();
    const installedApps = getStoredApps();
    const installedAppsDetails = allAppsData.filter(app => installedApps.includes(app.id) )


    const [sortedData, setSortedData] = useState(installedAppsDetails);
    
    const handleSorting = (e) => {
        const sortValue = e.target.value;
        
        const data = [...sortedData];

        if(sortValue === 'Low-High') {
            data.sort((a,b) => parseInt(a.downloads) - parseInt(b.downloads))
        } else if(sortValue === 'High-Low') {
            data.sort((a,b) => parseInt(b.downloads) - parseInt(a.downloads))
        }
        
        setSortedData(data)
    } 


    const handleUninstall = id => {
        const data = sortedData.filter(a => parseInt(a.id) === parseInt(id))
        toast.success(`${data["0"].title} is uninstalled`)
        removeFromLS(id);

        const remainingApps = sortedData.filter(app => app.id !== id)
        setSortedData(remainingApps);
    }
    
    
    return (
        <div className='md:mx-10 mx-4 mb-10 min-h-[90dvh]'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold text-[#001931] mb-4 mt-10'>Your Installed Apps</h1>
                <p className='text-xl text-[#627382] mb-10'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex items-center justify-between mb-4'>
                    <p>{installedApps.length} Apps Found</p>
                    <select onChange={handleSorting} defaultValue="Sort by size" name="" id="" >
                        <option value="Sort by size" disabled >Sort by size</option>
                        <option value="Low-High">Low-High</option>
                        <option value="High-Low">High-Low</option>
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Installation;