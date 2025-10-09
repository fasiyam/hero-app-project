import React from 'react';
import errImg from "../../assets/error-404.png";
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10 px-4 md:py-20 md:px-10 '>
            <img src={errImg} alt="" />
            <h2 className='text-5xl font-semibold text-[#001931] mb-10 md:mb-2 text-center'>Oops, page not found!</h2>
            <p className='mb-4 text-xl text-[#627382] text-center'>The page you are looking for is not available.</p>
            <Link to='/' >
                <button className='btn btn-primary'>Go Back!</button>
            </Link>
        </div>
    );
};

export default PageNotFound;