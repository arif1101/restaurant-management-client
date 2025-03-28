import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { singInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || '/';

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                navigate(from)
            })
            .catch(error => {
            })
    }
    
    return (
        <div>
            <p onClick={handleGoogleSignIn} className='btn bg-green-100 border border-green-700 hover:bg-green-200'>google</p>
        </div>
    );
};

export default SocialLogin;