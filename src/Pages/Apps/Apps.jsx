import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import { Search } from 'lucide-react';
import AppsNotFound from "../../Components/AppsNotFound/AppsNotFound";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

const Apps = () => {
    const [search, setSearch] = useState(''); 
    const allAppsData = useLoaderData();
    const [loading, setLoading] = useState(false);
    const [matchedApps, setMatchedApps] = useState(allAppsData);

    const matchApps = (apps, search) => {
        if(search.trim().toLowerCase() === ''){
            return true
        }

        return apps.title.toLowerCase().includes(search.trim().toLowerCase());
    }

    const handleSearch = e => {
        const value = e.target.value; 
        setSearch(value)
        setLoading(true)

        

        setTimeout(() => {
            if (value.trim() === "") {
                setMatchedApps(allAppsData);
                setLoading(false);
                return;
            }

            const filtered = allAppsData.filter(app => matchApps(app, search));
            setMatchedApps(filtered);
            setLoading(false)
        }, 300)
    }
  

  return (
    <div className="flex flex-col items-center justify-center mx-8 mt-15">
      <h1 className="text-5xl font-bold mb-4 text-center">Our All Applications</h1>
      <p className="text-xl text-[#627382] mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex items-center justify-between w-full mb-5">
        <p>({allAppsData.length}) Apps Found</p>

          <div className="flex items-center border px-4 border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-200 bg-white">
            <Search />
            <input
              onChange={handleSearch}
              type="search"
              placeholder="Search apps..."
              className="w-full py-2.5 pl-2 pr-4 text-gray-700 bg-transparent focus:outline-none placeholder-gray-500"
            />
          </div>

      </div>

      <div>
        {
            loading ? <LoadingScreen></LoadingScreen> :
            matchedApps.length === 0 && search.trim() !== 0 ? (
                <AppsNotFound></AppsNotFound>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-4'>
                   { 
                        matchedApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                   }
                </div>
            )
        }
      </div>
    </div>
  );
};

export default Apps;
