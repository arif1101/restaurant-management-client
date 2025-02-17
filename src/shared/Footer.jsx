import React from 'react';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='h-[95px] max-w-[1200px] mx-auto flex items-center justify-between px-[15px]'>
            <div className='flex items-center gap-3'>
                <img className='w-7 h-7' src="/burger.png" alt="" />
                <p className="text-2xl font-semibold">ByteBistro</p>
            </div>
            <div className='flex gap-4 text-xl'>
                <CiFacebook></CiFacebook>
                <CiTwitter></CiTwitter>
                <FaGithub></FaGithub>
            </div>
            <div>
            © 2025 ByteBistro. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;