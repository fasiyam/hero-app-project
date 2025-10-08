import { Download, Star } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import { MessageSquareHeart } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const { appId } = useParams();
  const allAppsData = useLoaderData();
  // console.log(appId)
  const filteredApp = allAppsData.filter(
    (app) => parseInt(app.id) === parseInt(appId)
  );
  console.log(filteredApp);


  return (
    <div>
      <div className="flex items-center justify-start gap-10 w-full">
        <div>
          <img
            className="w-[350px] h-[350px]"
            src={filteredApp["0"].image}
            alt=""
          />
        </div>
        <div className="flex-1">
          <div className="mb-8 pb-8 border-b-1 border-gray-400">
            <h2 className="text-4xl font-bold">{filteredApp["0"].title}</h2>
            <p className="text-xl font-semibold">
              Developed by{" "}
              <span className="text-[#632EE3]">
                {filteredApp["0"].companyName}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-10 mb-6">
            <div className="space-y-1">
              <Download></Download>
              <p>Downloads</p>
              <h3 className="text-[40px] font-extrabold">
                {parseInt(parseInt(filteredApp["0"].downloads) / 1000000)}M
              </h3>
            </div>
            <div className="space-y-1">
              <Star></Star>
              <p>Average Rating</p>
              <h3 className="text-[40px] font-extrabold">
                {filteredApp["0"].ratingAvg}
              </h3>
            </div>
            <div className="space-y-1">
              <MessageSquareHeart />
              <p>Total Reviews</p>
              <h3 className="text-[40px] font-extrabold">
                {parseInt(parseInt(filteredApp["0"].reviews) / 1000)}K
              </h3>
            </div>
          </div>
          <div>
            <button className="btn btn-primary bg-[#00d390] border-0 text-xl">
              Install Now ({filteredApp["0"].size}MB)
            </button>
          </div>
        </div>
      </div>

      {/* Ratings graph */}
      
    </div>
  );
};

export default AppDetails;
