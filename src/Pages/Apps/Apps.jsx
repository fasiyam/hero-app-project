import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import { Search } from 'lucide-react';

const Apps = () => {
  const allAppsData = useLoaderData();
  

  return (
    <div className="flex flex-col items-center justify-center mx-8 mt-20">
      <h1 className="text-5xl font-bold mb-4 text-center">Our All Applications</h1>
      <p className="text-xl text-[#627382] mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex items-center justify-between w-full mb-5">
        <p>({allAppsData.length}) Apps Found</p>

          <div className="flex items-center border px-4 border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-200 bg-white">
            <Search />
            <input
              type="search"
              placeholder="Search apps..."
              className="w-full py-2.5 pl-2 pr-4 text-gray-700 bg-transparent focus:outline-none placeholder-gray-500"
            />
          </div>

      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-4'>
        {allAppsData.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
