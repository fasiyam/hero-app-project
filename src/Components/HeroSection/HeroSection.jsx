import React from 'react';
import heroImg from "../../assets/hero.png"
import playStoreImg from "../../assets/playStore.png";
import appStoreImg from "../../assets/appStore.png";

const HeroSection = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10 md:mt-20'>
            <h1 className='md:text-7xl text-4xl text-center mb-5 md:mb-10'>We Build <br /><span className='bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-xl text-[#627382] text-center max-w-[980px] p-4'>At APPHIVE.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='mb-10 flex items-center justify-center gap-5 mt-10'>
                <a href="https://play.google.com/store/apps?hl=en" target='_blank'>
                    <button className='btn text-xl flex items-center justify-center gap-2.5'>
                        <img src={playStoreImg} alt="" />
                        Google Play
                    </button>
                </a>
                <a href="https://www.apple.com/app-store/" target='_blank'>
                    <button className='btn text-xl flex items-center justify-center gap-2.5'>
                        <img src={appStoreImg} alt="" />
                        App Store
                    </button>
                </a>
            </div>

            <img src={heroImg} alt="" />
        </div>
    );
};

export default HeroSection;