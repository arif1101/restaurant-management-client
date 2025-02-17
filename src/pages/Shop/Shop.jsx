import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Shop = () => {
    return (
        <div>
            <div className='bg-[#F9FAFC] h-[200px] flex justify-between items-center px-[15px]'>
                <p className='text-[40px] font-bold'>Online shop</p>
                <p className='btn bg-yellow-300 w-[100px] hover:bg-yellow-300'>Shop</p>
            </div>

            <div className='mt-[100px] grid grid-cols-2 gap-y-8'>
                <div className='w-[570px] h-[130px] bg-[#F9FAFC] flex p-[30px] gap-11 items-center'>
                    <img className='w-[70px] h-[70px]' src="/foodIcon/starters.png" alt="" />
                    <div>
                        <h1 className='text-[22px] font-bold'>Starters</h1>
                        <p className='text-stone-400'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='w-[570px] h-[130px] bg-[#F9FAFC] flex p-[30px] gap-11 items-center'>
                    <img className='w-[70px] h-[70px]' src="/foodIcon/main.png" alt="" />
                    <div>
                        <h1 className='text-[22px] font-bold'>Main dishes</h1>
                        <p className='text-stone-400'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='w-[570px] h-[130px] bg-[#F9FAFC] flex p-[30px] gap-11 items-center'>
                    <img className='w-[70px] h-[70px]' src="/foodIcon/drinks.png" alt="" />
                    <div>
                        <h1 className='text-[22px] font-bold'>Drinks</h1>
                        <p className='text-stone-400'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='w-[570px] h-[130px] bg-[#F9FAFC] flex p-[30px] gap-11 items-center'>
                    <img className='w-[70px] h-[70px]' src="/foodIcon/deserts.png" alt="" />
                    <div>
                        <h1 className='text-[22px] font-bold'>Desserts</h1>
                        <p className='text-stone-400'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>

            <div className='mt-[100px] flex flex-col gap-[60px]'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-8 '>
                        <h1 className='text-[40px] font-bold'>They will cook for you</h1>
                        <p className='text-stone-400'>Consectetur numquam poro nemo veniam
                        eligendi rem adipisci quo modi.</p>
                    </div>
                    <p className='btn bg-yellow-300 hover:bg-yellow-300 mt-auto'>More about us</p>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[270px] p-[30px] flex flex-col gap-5 bg-[#F9FAFC]'>
                        <img className='h-[270px]' src="/chef/chef2-.jpg" alt="" />
                        <div className='flex flex-col items-center gap-5'>
                            <h1 className='text-xl font-bold'>Paul Trueman</h1>
                            <p className='font-semibold text-stone-400'>Chef</p>
                            <div className='flex gap-4 text-xl'>
                                <CiFacebook></CiFacebook>
                                <CiTwitter></CiTwitter>
                                <FaGithub></FaGithub>
                            </div>
                        </div>
                    </div>

                    <div className='w-[270px] p-[30px] flex flex-col gap-5 bg-[#F9FAFC]'>
                        <img className='h-[270px]' src="/chef/chef-3.jpg" alt="" />
                        <div className='flex flex-col items-center gap-5'>
                            <h1 className='text-xl font-bold'>Paul Trueman</h1>
                            <p className='font-semibold text-stone-400'>Chef</p>
                            <div className='flex gap-4 text-xl'>
                                <CiFacebook></CiFacebook>
                                <CiTwitter></CiTwitter>
                                <FaGithub></FaGithub>
                            </div>
                        </div>
                    </div>

                    <div className='w-[270px] p-[30px] flex flex-col gap-5 bg-[#F9FAFC]'>
                        <img className='h-[270px]' src="/chef/chef-4.jpg" alt="" />
                        <div className='flex flex-col items-center gap-5'>
                            <h1 className='text-xl font-bold'>Paul Trueman</h1>
                            <p className='font-semibold text-stone-400'>Chef</p>
                            <div className='flex gap-4 text-xl'>
                                <CiFacebook></CiFacebook>
                                <CiTwitter></CiTwitter>
                                <FaGithub></FaGithub>
                            </div>
                        </div>
                    </div>

                    <div className='w-[270px] p-[30px] flex flex-col gap-5 bg-[#F9FAFC]'>
                        <img className='h-[270px]' src="/chef/chef-5.jpg" alt="" />
                        <div className='flex flex-col items-center gap-5'>
                            <h1 className='text-xl font-bold'>Paul Trueman</h1>
                            <p className='font-semibold text-stone-400'>Chef</p>
                            <div className='flex gap-4 text-xl'>
                                <CiFacebook></CiFacebook>
                                <CiTwitter></CiTwitter>
                                <FaGithub></FaGithub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;