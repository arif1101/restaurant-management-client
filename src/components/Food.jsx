import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({food}) => {

    const {_id,foodName,foodImage,foodCategory,quantity,price,foodOrigin,rating} = food
    
    return (
        <div className='flex w-[330px]'>
            <img className='w-[170px] h-[270px] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl' src={foodImage} alt="" />
            <div className='w-[330px] h-[236px] p-[15px] flex flex-col rounded-tr-3xl rounded-br-3xl bg-white shadow'>
                <div>
                <h1>{foodName}</h1>
                <p>{rating}</p>
                <p>The ordder cost</p>
                <p>{price}</p>
                </div>
                <Link to={`/foods/${_id}`}><p className='btn'>ORDER NOW</p></Link>
            </div>

        </div>
    );
};

export default Food;