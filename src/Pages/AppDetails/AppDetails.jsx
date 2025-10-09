import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { addToLS, getStoredApps } from "../../utility/LocalStorage";
import downloadImg from "../../assets/icon-downloads.png";
import starImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
    const { appId } = useParams();
    const allAppsData = useLoaderData();
    
    
    const filteredApp = allAppsData.filter(
        (app) => parseInt(app.id) === parseInt(appId)
    );
    
    const appSize = filteredApp["0"].size
    
    const ratingData = filteredApp["0"].ratings
    ? filteredApp["0"].ratings.map(rating => ({
        rating: rating.name,
        count: rating.count,
    }))
    .sort((a,b) => b.count - a.count)
    : [];
    
    const isInstalled = getStoredApps().includes(filteredApp["0"].id);
    
    const [btnText, setBtnText] = useState(
        isInstalled ? "Installed" : `Install Now (${appSize}MB)`
    )
    const [disabled, setDisabled] = useState(isInstalled)

    const handleInstallBtn = (id) => {
        toast.success(`${filteredApp["0"].title} successfully installed`)
        addToLS(id)

        setDisabled(true)
        setBtnText('Installed')
    }

  return (
    <div className="md:mt-15 mt-10 md:mx-20 mx-2.5 md:mb-20 mb-10">
      <div className="flex md:flex-row flex-col items-center justify-start gap-10 w-full">
        <div>
          <img
            className="md:w-[350px] md:h-[350px] w-[240px] h-[240px]"
            src={filteredApp["0"].image}
            alt=""
          />
        </div>
        <div className="md:flex-1">
          <div className="mb-8 pb-8 border-b-1 border-gray-400">
            <h2 className="text-4xl font-bold">{filteredApp["0"].title}</h2>
            <p className="text-xl font-semibold">
              Developed by{" "}
              <span className="text-[#632EE3]">
                {filteredApp["0"].companyName}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-4 md:gap-10 mb-6">
            <div className="space-y-1">
              {/* <Download></Download> */}
              <img className="w-[32px]" src={downloadImg} alt="" />
              <p>Downloads</p>
              <h3 className="text-[40px] font-extrabold">
                {parseInt(parseInt(filteredApp["0"].downloads) / 1000000)}M
              </h3>
            </div>
            <div className="space-y-1">
              {/* <Star></Star> */}
              <img className="w-[32px]" src={starImg} alt="" />
              <p>Average Rating</p>
              <h3 className="text-[40px] font-extrabold">
                {filteredApp["0"].ratingAvg}
              </h3>
            </div>
            <div className="space-y-1">
              <img className="w-[32px]" src={reviewImg} alt="" />
              <p>Total Reviews</p>
              <h3 className="text-[40px] font-extrabold">
                {parseInt(parseInt(filteredApp["0"].reviews) / 1000)}K
              </h3>
            </div>
          </div>
          <div>
            <button onClick={() => handleInstallBtn(filteredApp["0"].id)} className="btn btn-primary bg-[#00d390] border-0 text-xl" disabled={disabled}>
              {btnText}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings graph */}
        
        <div>
            <p className="md:mt-20 mt-10 md:mx-10 mx-4 text-2xl font-bold">Ratings</p>
            <ResponsiveContainer width="90%" height={300} className="my-1">
                <BarChart
                    layout="vertical"
                    data={ratingData}
                    margin={{ top: 10, right: 20, left: 20, bottom: 5 }}
                >
            
                    <XAxis type="number" />
                    <YAxis dataKey="rating" type="category" />
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="count" fill="#ff8811" barSize={25} />
                </BarChart>
            </ResponsiveContainer>
        </div>


        {/* Description  */}

        <p className="text-2xl font-semibold text-[#001931] mb-6">Description</p>
        <p className="text-xl text-[#627382]">{filteredApp["0"].description}</p>
        <ToastContainer></ToastContainer>
    </div>
  );
};

export default AppDetails;
