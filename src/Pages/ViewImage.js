import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ViewImage.css'
const ViewImage = () => {

    const [images, setImage] = useState([]);
    // console.log(images)
    useEffect(() =>{
        fetch('http://localhost:5000/images') 
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
            <Link to="home"><button className=' p-3  m-5 rounded bg-success text-white '>back to home</button></Link>
           </div>
        </div>
    );
};

export default ViewImage;