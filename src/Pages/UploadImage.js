import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const UploadImage = () => {
    const navigate = useNavigate();
    const imageApiKey = '10e1785230025104fca088b02b109744';

    const uploadImageDatabase = async (event) => {
        event.preventDefault();

        const data = document.querySelector('input[type="file"]');
        const formData = new FormData();
        // console.log(data);
        formData.append('image', data.files[0]);

        fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                if (result.success) {
                    const  imageData = result?.data?.url
                    const image = {imageData} ;
                    console.log(image);

                    //send to my database;
                    fetch(`https://radiant-bayou-10996.herokuapp.com/image`, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
            
                        },
                        body: JSON.stringify(image)
                    })
                        .then(res => res.json())
                        .then(imageOutput => {
                            console.log('image' , imageOutput);
                            console.log(imageOutput.acknowledged);
                            if(imageOutput.acknowledged){
                                navigate('/viewImage')
                            }
                        })
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }


    return (
        <div className='text-center mt-5 border border-4 w-50  mx-auto'>
            <h1>Upload you image </h1>
            <form onSubmit={uploadImageDatabase}>
                <input className='my-4 ' type="file" name="image" id="image" />
                <input type="submit" value="Upload Photo" />
            </form>
        </div>
    );
};

export default UploadImage;