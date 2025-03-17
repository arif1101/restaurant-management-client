import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signinAnimation from '../../assets/lottie/login.json'
import AuthContext from '../../context/AuthContext';
import SocialLogin from '../../shared/SocialLogin';

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            navigate(from)
        })
        .catch(error => {
        })
    }
    
    return (
        <div className='flex p-[100px] bg-[#F9FAFC]'>
            <Lottie className='' animationData={signinAnimation}></Lottie>
            <div className='w-[600px] max-h-[550px] px-[40px] rounded-3xl justify-center bg-white shadow flex flex-col gap-[30px]'>
                    <p className='text-2xl font-bold text-center'>Log-in</p>
                    <p className='font-bold text-stone-400 flex gap-2'>New user? <Link to='/register' className='border-b-2 border-black'><span className='text-purple-500'>sing up here</span></Link> </p>
                    <form onSubmit={handleSignIn} className="">
                        {/* email  */}
                        <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* password  */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;