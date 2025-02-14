import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import signinAnimation from '../../assets/lottie/login.json'

const Login = () => {
    return (
        <div className='flex p-[100px] bg-[#F9FAFC]'>
            <Lottie className='' animationData={signinAnimation}></Lottie>
            <div className='w-[600px] max-h-[550px] px-[40px] rounded-3xl justify-center bg-white shadow flex flex-col gap-[30px]'>
                    <p className='text-2xl font-bold text-center'>Registration</p>
                    <p className='font-bold text-stone-400 flex gap-2'>New user? <Link to='/register' className='border-b-2 border-black'><p className='text-purple-500'>sing up here</p></Link> </p>
                    <form className="">
                        <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='btn bg-green-100 border border-green-700 hover:bg-green-200'>google</p>
            </div>
        </div>
    );
};

export default Login;