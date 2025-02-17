import React from 'react';
import OurAppAnimation from '../../src/assets/lottie/app.json'
import Lottie from 'lottie-react';

const OurApp = () => {
    return (
        <div className='py-[50px] flex justify-between'>
            <div className='flex flex-col gap-9 w-[570px] justify-center'>
                <h1 className='text-[72px] font-bold'>Download Our mobile app.</h1>
                <p className='text-stone-400'>Consectetur numquam poro nemo veniam
                eligendi rem adipisci quo modi.</p>
                <div className='flex gap-9'>
                    <div className='w-[185px] h-[55px] flex bg-black text-white justify-around px-[15px] py-[8px] rounded-lg'>
                        <img className='' src="/public/google-play.png" alt="" />
                        <div>
                        <p className='text-[10px]'>GET IT ON</p>
                        <h1>Google Play</h1>
                        </div>
                    </div>
                    <div className='w-[185px] h-[55px] flex bg-black text-white justify-around px-[15px] py-[8px] rounded-lg'>
                        <img className='text-white' src="/public/apple.png" alt="" />
                        <div className=''>
                        <p className='text-[10px]'>Download on the</p>
                        <h1>App Store</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Lottie className='w-[570px] flex' animationData={OurAppAnimation}></Lottie>
        </div>
    );
};

export default OurApp;