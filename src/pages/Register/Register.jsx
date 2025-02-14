import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import signOutAnimation from '../../assets/lottie/register.json'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import SocialLogin from '../../shared/SocialLogin';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name,email,photoURL, password);

        // password validation: 
        // show password validation error
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile({displayName: name, photoURL: photoURL})
                .then(()=> {
                    navigate('/')
                })
                .catch(()=>{
                    console.log(err)
                });
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    
    
    return (
        <div className='flex p-[100px] bg-[#F9FAFC]'>
            <Lottie className='' animationData={signOutAnimation}></Lottie>
            <div className='w-[600px] max-h-[650px] px-[40px] rounded-3xl justify-center bg-white shadow flex flex-col gap-[30px]'>
                    <p className='text-2xl font-bold text-center'>Registration</p>
                    <form onSubmit={handleRegister} className="">
                        {/* name */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        {/* email */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* photo */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="URL" name='photoURL' placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        {/* password */}
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
                    <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;