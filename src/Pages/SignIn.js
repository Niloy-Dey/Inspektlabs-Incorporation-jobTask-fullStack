import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const SignIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
            <Link to="/" > <Button className='bg-info text-black'>Back to Home</Button > </Link>
        </div>
    );
};

export default SignIn;