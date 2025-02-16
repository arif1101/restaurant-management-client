import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const FoodDetails = () => {

    const {user} = useContext(AuthContext)

    const food = useLoaderData();
    const [quantityFood, setQuantity] = useState(0);
    const {_id,foodName,description,foodImage,foodCategory,quantity,price,foodOrigin,rating} = food


    const increase = () => {
        if(quantityFood<quantity){
            setQuantity(quantityFood + 1);
        }
    }
    const decrease = () => {
        if (quantityFood > 0) setQuantity(quantityFood - 1);
    };

    const submitOrder = () => {

        const foodOrder = {
            food_id: _id,
            foodName: foodName,
            foodCategory: foodCategory,
            quantity: quantityFood,
            price: price,
            orderByName: user.displayName,
            orderByEmail: user.email,
            foodOrigin: foodOrigin

        }

        fetch('http://localhost:5000/food-order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // if (data.insertedId) {
            //     Swal.fire({
            //         position: "top-end",
            //         icon: "success",
            //         title: "Your work has been saved",
            //         showConfirmButton: false,
            //         timer: 1500
            //     });
            //     // navigate('/myApplications')
            // }
        })
        
    }


    
    
    
    return (
        <div className='flex py-[100px] gap-[70px]'>
            <img className='w-[523px] h-[468px] rounded-3xl' src={foodImage} alt="" />
            <div className='w-[766px] h-[619px] flex flex-col gap-[30px]'>
                <div className='flex gap-5 items-center'>
                    <p className='bg-yellow-300 p-2'>5%</p>

                    {/* rating */}
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                name={`rating-${_id}`}  // Use unique name for each rating component
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked={Math.round(rating) === star} // Check the correct star
                            />
                        ))}
                    </div>

                    {/* rating end */}
                    
                </div>

                {/* title  */}
                <h1 className='text-[40px] font-bold'>{foodName}</h1>
                {/* description */}
                <p>{description}</p>
                {/* price  */}
                <div className='flex gap-[32px]'>
                    <p>{price}</p>
                    <p className='text-red-500'>{price+50}</p>
                </div>
                {/* quantity */}
                <div className="flex items-center space-x-4">
                    <span className="font-bold">QUANTITY:</span>
                    <div className="flex items-center border border-gray-400 rounded-lg px-3 py-1">
                        <button 
                            onClick={decrease} 
                            className="px-3 text-lg font-bold hover:bg-gray-200 rounded"
                        >
                            −
                        </button>
                        <span className="px-5">{quantityFood}</span>
                        <button 
                            onClick={increase} 
                            className="px-3 text-lg font-bold hover:bg-gray-200 rounded"
                        >
                            +
                        </button>
                    </div>
                </div>
                {/* purchase  */}
                <button onClick={submitOrder} className='btn bg-yellow-300 hover:bg-yellow-300'>Purchase</button>
                {/* small info */}
                <div>
                    <p>{foodOrigin}</p>
                    <p>DELIVERY COST : $5</p>
                    <p>SKU: N/A</p>
                    <p>CATEGORY: {foodCategory}</p>
                </div>


            </div>
        </div>
    );
};

export default FoodDetails;