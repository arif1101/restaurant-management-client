import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const MyFoods = () => {

    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/food-list?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(err => console.error("Error fetching data:", err));
    }, [user.email]);


    console.log(foods)
    
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">My Food List</h2>
            {foods.length === 0 ? (
                <p className="text-center text-gray-500">No foods found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foods.map((food) => (
                        <div key={food._id} className="bg-white border shadow-lg rounded-lg p-4 flex items-center gap-4">
                            {/* Food Image */}
                            <img 
                                src={food.foodImage} 
                                alt={food.foodName} 
                                className="w-20 h-20 object-cover rounded-md"
                            />

                            {/* Food Details */}
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900">{food.foodName}</h3>
                                <p className="text-gray-600">Price: <span className="font-semibold">${food.price}</span></p>
                                <p className="text-gray-600">Quantity: <span className="font-semibold">{food.quantity}</span></p>
                            </div>

                            {/* Update Button */}
                            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyFoods;