import React from 'react';
import logoImg from "../../assets/logo.png"
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='md:px-10 px-4 bg-[#001931] md:mt-20 mt-10'>
            <div className='md:py-10 py-5 flex md:flex-row flex-col gap-10 items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <img className='w-[40px]' src={logoImg} alt="" />
                    <p className='text-white text-xl'>AppHive</p>
                </div>
                <div>
                    <p className='text-white mb-2 font-bold'>Important Links</p>
                    <div className='flex flex-col gap-2.5'>
                        <Link className='text-white' to="/">Home</Link>
                        <Link className='text-white' to="/apps">Apps</Link>
                        <Link className='text-white' to="/installation">Installed Apps</Link>
                    </div>
                </div>
                <div >
                    <p className='text-white text-center'>Social Links</p>
                    <div className='flex items-center gap-2.5'>
                        <img className='w-[24px]' src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="" />
                        <img className='w-[24px]' src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="" />
                        <img className='w-[24px]' src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" />
                        <img className='w-[24px] bg-white' src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-2.5 border-t-1 border-[#E5E7EB] pt-4'>
                <p className='text-white text-center'>Copyright &copy; 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;