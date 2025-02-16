import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/food-orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(err => console.error("Error fetching data:", err));
    }, [user.email]);

    return (
        <div className="overflow-x-auto p-6">
            <h2 className="text-[40px] font-bold mb-6 text-center text-gray-800">My Orders</h2>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <table className="w-full border-collapse">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-center">Price</th>
                            <th className="py-3 px-6 text-center">Quantity</th>
                            <th className="py-3 px-6 text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-medium">
                        {foods.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-6 text-gray-500">
                                    No orders found.
                                </td>
                            </tr>
                        ) : (
                            foods.map((food, index) => (
                                <tr 
                                    key={food.id} 
                                    className={`border-b ${
                                        index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                                    } hover:bg-gray-200 transition duration-200`}
                                >
                                    <td className="py-4 px-6 text-left">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold text-gray-900">{food.foodName}</div>
                                                <div className="text-xs text-gray-500">{food.foodCategory}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-center text-gray-800">${food.price}</td>
                                    <td className="py-4 px-6 text-center text-gray-800">{food.quantity}</td>
                                    <td className="py-4 px-6 text-center font-semibold text-green-600">
                                        ${(food.price * food.quantity).toFixed(2)}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
