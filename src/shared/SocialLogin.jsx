import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const SocialLogin = () => {

    const { singInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    
    return (
        <div>
            <p onClick={handleGoogleSignIn} className='btn bg-green-100 border border-green-700 hover:bg-green-200'>google</p>
        </div>
    );
};

export default SocialLogin;