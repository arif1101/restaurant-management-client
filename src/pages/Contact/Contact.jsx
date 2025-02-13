import React from 'react';

const Contact = () => {
    return (
        <div className='bg-[#F9FAFC] flex py-[150px] px-[15px] justify-around items-center'>
            <div className='w-[670px] flex flex-col gap-6'>
                <p className='text-[12px]'>Contact</p>
                <h1 className='text-[72px] font-semibold'>Get in Touch with Starbelly</h1>
                <p className='text-[16px] w-72'>Consectetur numquam poro nemo veniam
                eligendi rem adipisci quo modi.</p>
            </div>

            <div className='w-[430px] p-[24px] bg-white'>
                <div className='border-4 border-dotted p-6 flex flex-col gap-[30px] '>
                    <p className='text-2xl font-bold text-center'>Send Message</p>
                    <label className="input input-bordered flex items-center gap-2 bg-[#F9FAFC]">
                    Name
                    <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-[#F9FAFC]">
                    Email
                    <input type="text" className="grow" placeholder="daisy@site.com" />
                    </label>
                    <textarea
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-lg w-full max-w-xs bg-[#F9FAFC]">
                    </textarea>
                    <p className='text-sm text-center'>*We promise not to disclose your
                    personal information to third parties.</p>
                    <p className='btn w-36 bg-yellow-300 mx-auto hover:bg-yellow-300'>Send</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;