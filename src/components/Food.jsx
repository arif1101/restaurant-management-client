import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({food}) => {

    const {_id,foodName,foodImage,foodCategory,quantity,price,foodOrigin,rating} = food
    
    return (
        <div className='flex w-[330px]'>
            <img className='w-[170px] h-[270px] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl' src={foodImage} alt="" />
            <div className='w-[330px] h-[236px] p-[15px] flex flex-col rounded-tr-3xl rounded-br-3xl bg-white shadow justify-between'>
                <div className='h-full flex flex-col justify-between pb-[30px]'>
                <h1 className='text-xl font-semibold w-[160px] truncate '>{foodName}</h1>
                <p className='text-green-700 font-bold'>rating : {rating}</p>
                <p className='text-stone-500'>The order cost :</p>
                <p className='text-red-500 font-bold'>{price} $</p>
                </div>
                <Link to={`/foods/${_id}`}><p className='btn bg-red-200 text-red-600 font-bold hover:bg-red-200'>ORDER NOW</p></Link>
            </div>

        </div>
    );
};

export default Food;