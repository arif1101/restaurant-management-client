import React, { useEffect, useState } from 'react';
import Food from '../../components/Food';

const Foods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://restaurant-management-server-peach.vercel.app/foods')
        .then(res => res.json())
        .then(data => {
            setFoods(data);
        })
    }, [])
    
    
    return (
        <div className='flex flex-col gap-[64px] bg-[#F9FAFC] pb-[64px] px-[15px]'>
            <h1 className='text-[40px] font-bold text-center'>Our Dishes</h1>
            <div className='flex flex-wrap justify-between gap-5'>
            {
                foods.map(food => <Food food={food} key={food._id}></Food>)
            }
            </div>
        </div>
    );
};

export default Foods;