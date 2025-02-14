import Lottie from 'lottie-react';
import React from 'react';
import signOutAnimation from '../../assets/lottie/register.json'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
<div className='flex p-[100px] bg-[#F9FAFC]'>
            <Lottie className='' animationData={signOutAnimation}></Lottie>
            <div className='w-[600px] max-h-[650px] px-[40px] rounded-3xl justify-center bg-white shadow flex flex-col gap-[30px]'>
                    <p className='text-2xl font-bold text-center'>Registration</p>
                    <form className="">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="URL" name='photoURL' placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='btn bg-green-100 border border-green-700 hover:bg-green-200'>google</p>
            </div>
        </div>
    );
};

export default Register;