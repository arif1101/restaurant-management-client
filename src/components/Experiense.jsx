import React from 'react';

const Experiense = () => {
    return (
        <div className='flex py-[15px] justify-between bg-[#F9FAFC] px-[15px] mt-[100px] rounded-3xl mb-[74px]'>
            <div className='relative'>
                <img className='max-w-[456px] h-[620px] rounded-3xl' src="/public/experiense.jpg" alt="" />
                <div id='float' className='absolute top-[500px] left-[300px] shadow w-[230px] h-[230px] bg-white p-[25px]'>
                    <div className=' border-[4px] border-dotted h-full'>
                        <p className='text-[72px] font-bold text-yellow-500 flex justify-center items-center'>12</p>
                        <p className='px-4 flex text-center mx-auto text-xl font-bold'>Years Experiense</p>
                    </div>
                </div>
            </div>
            <div className='max-w-[620px] flex flex-col bg-white py-[15px] px-[30px] justify-center rounded-3xl gap-8'>
                <h1 className='text-[40px] font-bold'>We are doing more than you expect</h1>
                <p className='text-stone-400'>Faudantium magnam error temporibus ipsam aliquid neque quibusdam dolorum, quia ea numquam assumenda mollitia dolorem impedit. Voluptate at quis exercitationem officia temporibus adipisci quae totam enim dolorum, assumenda. Sapiente soluta nostrum reprehenderit a velit obcaecati facilis vitae magnam tenetur neque vel itaque inventore eaque explicabo commodi maxime! Aliquam quasi, voluptates odio.

                Consectetur adipisicing elit. Cupiditate nesciunt amet facilis numquam, nam adipisci qui voluptate voluptas enim obcaecati veritatis animi nulla, mollitia commodi quaerat ex, autem ea laborum.</p>
            </div>
        </div>
    );
};

export default Experiense;