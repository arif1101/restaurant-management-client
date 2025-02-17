import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [updatedFood, setUpdatedFood] = useState({});

    // Fetch user's food list
    useEffect(() => {
        fetch(`http://localhost:5000/food-list?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(err => console.error("Error fetching data:", err));
    }, [user.email]);

    // Handle update button click
    const updateHandle = (food) => {
        setSelectedFood(food);
        setUpdatedFood(food);
        setIsModalOpen(true);
    };

    // Handle input changes and ensure numbers are stored properly
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedFood((prev) => ({
            ...prev,
            [name]: name === "price" || name === "quantity" ? Number(value) : value, // Convert to number
        }));
    };

    // Submit update request to server
    const handleUpdateSubmit = () => {
        fetch(`http://localhost:5000/foods/${selectedFood._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedFood),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                setFoods(prevFoods =>
                    prevFoods.map(food =>
                        food._id === selectedFood._id ? updatedFood : food
                    )
                );
                setIsModalOpen(false);
            }
        });
    };
    

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">My Food List</h2>
            {foods.length === 0 ? (
                <p className="text-center text-gray-500">No foods found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foods.map((food) => (
                        <div key={food._id} className="bg-white border shadow-lg rounded-lg p-4 flex items-center gap-4">
                            <img 
                                src={food.foodImage} 
                                alt={food.foodName} 
                                className="w-20 h-20 object-cover rounded-md"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900">{food.foodName}</h3>
                                <p className="text-gray-600">Price: <span className="font-semibold">${food.price}</span></p>
                                <p className="text-gray-600">Quantity: <span className="font-semibold">{food.quantity}</span></p>
                            </div>
                            <button 
                                onClick={() => updateHandle(food)} 
                                className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal for updating food details */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg w-80">
                        <h2 className="text-lg font-semibold mb-3">Update Food</h2>
                        <label className="block mb-2">
                            Name:
                            <input
                                type="text"
                                name="foodName"
                                value={updatedFood.foodName || ""}
                                onChange={handleInputChange}
                                className="border p-2 w-full rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Price:
                            <input
                                type="number"
                                name="price"
                                value={updatedFood.price || ""}
                                onChange={handleInputChange}
                                className="border p-2 w-full rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Quantity:
                            <input
                                type="number"
                                name="quantity"
                                value={updatedFood.quantity || ""}
                                onChange={handleInputChange}
                                className="border p-2 w-full rounded"
                            />
                        </label>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button 
                                onClick={() => setIsModalOpen(false)} 
                                className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleUpdateSubmit} 
                                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyFoods;
