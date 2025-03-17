import React, { useEffect, useState } from 'react';
import Food from './Food';

const FavouriteFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://restaurant-management-server-peach.vercel.app/foods')
        .then(res => res.json())
        .then(data => {
            setFoods(data);
        })
    }, [])
    
    
    return (
        <div className='flex flex-col gap-[46px] bg-[#F9FAFC] pb-[64px] px-[15px] mt-[100px]'>
            <h1 className='text-[40px] font-bold'>Most Famous Dishes</h1>
            <p className='text-stone-400'>Consectetur numquam poro nemo veniam
            eligendi rem adipisci quo modi.</p>
            <div className='flex flex-wrap justify-between gap-5'>
                {
                    foods.slice(0, 6).map(food => <Food food={food} key={food._id} />)
                }
            </div>
        </div>
    );
    
};

export default FavouriteFoods;