import React, { useContext, useState } from 'react';
import { Link, useAsyncError, useLoaderData, useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const FoodDetails = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderData, setOrderData] = useState(null)

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
            if(data.insertedId){
                setOrderData(foodOrder);
                setIsModalOpen(true)
            }
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
        <div className='flex pt-[100px] gap-[70px]'>
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
                    <p className='text-green-500 font-bold text-xl'><span className='text-black text-lg'>Price : </span>{price}</p>
                    <p className='text-red-500 line-through text-xl font-bold'>{(price + 5).toFixed(2)}</p>
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
                    <span className={quantityFood === 0 ? "text-red-500 font-semibold" : ""}>
                    {quantityFood === 0 ? "Select Food Quantity" : ""}
                    </span>
                </div>

                {/* purchase  */}
                <div>
                <button onClick={submitOrder} className={`btn bg-yellow-300 hover:bg-yellow-300 w-full ${quantityFood===0 ? 'opacity-100 cursor-not-allowed': ''}`} disabled={quantityFood===0}>Purchase

                </button>
                {/* Modal (Shows after successful order) */}
                {isModalOpen && orderData && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-xl shadow-lg w-[300px]">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                            <p><strong>Food Name:</strong> {orderData.foodName}</p>
                            <p><strong>Category:</strong> {orderData.foodCategory}</p>
                            <p><strong>Origin:</strong> {orderData.foodOrigin}</p>
                            <p><strong>Price:</strong> ${orderData.price.toFixed(2)}</p>
                            <p><strong>Quantity:</strong> {orderData.quantity}</p>
                            <p><strong>Total Cost:</strong> ${((orderData.price*orderData.quantity)+2).toFixed(2)}</p>

                            <div className="flex justify-between mt-4">
                                <button 
                                    onClick={() => setIsModalOpen(false)} 
                                    className="bg-gray-400 px-4 py-2 rounded text-white"
                                >
                                    Close
                                </button>
                                <Link to='/myOrders'>                                <button className="bg-yellow-300 px-4 py-2 rounded text-black font-semibold">
                                    My Food
                                </button></Link>
                            </div>
                        </div>
                    </div>
                )}
                </div>
                {/* small info */}
                <div className='flex flex-wrap gap-4'>
                    <p className='uppercase font-bold text-stone-500'>{foodOrigin}</p>
                    <p className='font-bold text-yellow-600'>|</p>
                    <p className='uppercase font-bold text-stone-500'>DELIVERY COST : $2</p>
                    <p className='font-bold text-yellow-600'>|</p>
                    <p className='uppercase font-bold text-stone-500'>SKU: N/A</p>
                    <p className='font-bold text-yellow-600'>|</p>
                    <p className='uppercase font-bold text-stone-500'>CATEGORY: {foodCategory}</p>
                </div>


            </div>
        </div>
    );
};

export default FoodDetails;