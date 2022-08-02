import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mx-auto w-50 text-center mt-5'>
            <h1>hello project</h1>
            <Link to="/signIn" ><Button className='bg-success'>Please Login!!</Button></Link> 
        </div>
    );
};

export default Home;