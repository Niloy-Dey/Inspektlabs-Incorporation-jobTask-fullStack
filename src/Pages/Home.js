import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Home = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if(user){
        navigate('/uploadImage')
    }
    console.log(user);    
    return (
        <div className='mx-auto w-50 text-center mt-5'>
            <h1>Welcome to sign in page</h1>
            <div>
                <div class="my-5 ">
                        <Button onClick={() => signInWithGoogle()}  class=" p-3  rounded bg-success text-white w-50">
                           Continue With Google
                        </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;