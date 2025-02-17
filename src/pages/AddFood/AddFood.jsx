import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const AddFood = () => {

    const {user} = useContext(AuthContext)

    const handleAddFood = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newFood = Object.fromEntries(formData.entries());
        console.log(newFood)

        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    
    
    return (
        <div className='bg-[#F9FAFC] py-4'>
            <form onSubmit={handleAddFood} className=" w-[700px] mx-auto">
                {/* 1 foodName */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Name</span>
                </label>
                <input type="name" name='foodName' placeholder="name" className="input input-bordered" required />
                </div>
                {/* 2 foodPhoto */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Food image</span>
                </label>
                <input type="URL" name='foodImage' placeholder="food image" className="input input-bordered" required />
                </div>
                {/* 3 foodCategory */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Food category</span>
                </label>
                <input type="text" name='foodCategory' placeholder="food category" className="input input-bordered" required />
                </div>
                {/* 4 quantity */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Quantity</span>
                </label>
                <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" required />
                </div>
                {/* 5 price */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Price</span>
                </label>
                <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                </div>
                {/* 6 email */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" name='addedByEmail' placeholder={user.email} className="input input-bordered" required />
                </div>
                {/* 7 description */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Description</span>
                </label>
                <input type="text" name='description' placeholder="sort description" className="input input-bordered" required />
                </div>
                {/* 8 add by name */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Add by </span>
                </label>
                <input type="text" name='addedByName' placeholder="Add by name" className="input input-bordered" required />
                </div>
                {/* 9 food origin */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Food origin</span>
                </label>
                <input type="text" name='foodOrigin' placeholder="food origin" className="input input-bordered" required />
                </div>

                {/* 10 rating */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Rating</span>
                </label>
                <input type="number" name='rating' placeholder="rating" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                <button className="btn bg-yellow-300 hover:bg-yellow-300 font-bold">Add food</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;