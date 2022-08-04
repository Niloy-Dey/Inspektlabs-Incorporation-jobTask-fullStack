import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './ViewImage.css'
const ViewImage = () => {
    const navigate = useNavigate();
    const backHome =() =>{
        navigate('/home')
    }
    const [images, setImage] = useState([]);
    // console.log(images)
    useEffect(() =>{
        fetch('https://radiant-bayou-10996.herokuapp.com/images') 
            .then(res => res.json())
            .then(data => setImage(data))
    })
    return (
        <div className='m-5 d-flex justify-content-center align-items-center'>
           <div>
           <div>
           {
                images.map(image => <img className='imageHover' src={image.imageData} alt="" />)
            }
           </div>
            <button onClick={backHome} className=' p-3  m-5 rounded bg-success text-white '>back to home</button>
           </div>
        </div>
    );
};

export default ViewImage;