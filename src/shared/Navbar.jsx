import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {

    const {user, signOutUser, loading} = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
        })
        .catch(error => {
        })
    }

    const links = (
        <>
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    
                    `bg-white border px-2 rounded-xl flex items-center py-2 ${
                        isActive ? '!bg-yellow-100' : 'hover:bg-yellow-100'
                    }`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/foods"
                className={({ isActive }) =>
                    `bg-white border px-2 rounded-xl flex items-center py-2 ${
                        isActive ? '!bg-yellow-100' : 'hover:bg-yellow-100'
                    }`
                }
            >
                All Foods
            </NavLink>
            <NavLink
                to="/gallery"
                className={({ isActive }) =>
                    `bg-white border px-2 rounded-xl flex items-center py-2 ${
                        isActive ? '!bg-yellow-100' : 'hover:bg-yellow-100'
                    }`
                }
            >
                Gallery
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `bg-white border px-2 rounded-xl flex items-center py-2 ${
                        isActive ? '!bg-yellow-100' : 'hover:bg-yellow-100'
                    }`
                }
            >
                Contact
            </NavLink>
            <NavLink
                to="/shop"
                className={({ isActive }) =>
                    `bg-white border px-2 rounded-xl flex items-center py-2 ${
                        isActive ? '!bg-yellow-100' : 'hover:bg-yellow-100'
                    }`
                }
            >
                Shop
            </NavLink>
        </>
    );
    
    return (
        <div className="navbar shadow sticky top-0 z-50 bg-white">
        <div className="navbar-start h-[80px]">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
            </ul>
            </div>
            <div className='flex items-center'>
                <img className='w-12 h-12' src="/burger.gif" alt="" />
                <p className="text-2xl font-semibold">B<span className='text-yellow-600'>yte</span>B<span className='text-yellow-600'>istro</span></p>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-3">
                {links}
            </ul>
        </div>
        <div className="navbar-end flex gap-3 mr-5">

            {
                user?<>
                    <button onClick={handleSignOut} className="btn bg-red-100 text-red-600 font-bold">Sign out</button>
                </> : <>
                    <Link to='/register'><button className="btn">Register</button></Link>
                    <Link to='/login'><button className="btn">Sign In</button></Link>
                </>
            }


            <div className="dropdown dropdown-bottom dropdown-end" >
                {/* <div tabIndex={0} role="button" className="btn  m-1"><img src="https://i.ibb.co.com/vH1ySpZ/ezgif-2-9828453b56.jpg" alt="" /></div> */}
                {/* <p className='font-bold text-yellow-700'>{user?.displayName}</p> */}
                {
                    loading ? ('') : (
                        <img tabIndex={0} role='button' className={`w-14 h-14 rounded-full border-2 border-yellow-500 ${user ? '':'hidden'}`} src={user?.photoURL} alt="" />
                    )
                }
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1000] w-[130px] p-2 shadow">
                    <Link to='/myFoods'><button className="btn w-full">My Foods</button></Link>
                    <Link to='/addFood'><button className="btn w-full">Add food</button></Link>
                    <Link to='/myOrders'><button className="btn w-full">My Orders</button></Link>
                </ul>
            </div>

        </div>
        </div>
    );
};

export default Navbar;