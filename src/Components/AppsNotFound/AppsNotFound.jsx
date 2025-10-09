import React from 'react';
import noAppImg from "../../assets/App-Error.png"
import { Link } from 'react-router';

const AppsNotFound = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <img className='mb-5 w-[420px]' src={noAppImg} alt="" />
            <h2 className='text-5xl font-semibold mb-2'>OPPS!! APP NOT FOUND</h2>
            <p className='mb-4 text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to="/">
                <button className='btn btn-primary font-semibold'>Go Back!</button>
            </Link>
        </div>
    );
};

export default AppsNotFound;