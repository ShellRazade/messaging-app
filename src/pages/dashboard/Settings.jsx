import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Settings = () => {

    //Update Details
    // const handleSubmit = async (e) => {
    //     event.preventDefault();
    //     //logic to handle login goes here
    //     const formData = new FormData(event.target);
    //     const userName = formData.get('userName');
    //     const firstName = formData.get('firstName');
    //     const lastName = formData.get('lastName');
    //     console.log('userName', userName. 'firstName', firstname, 'lastName', lastName);
        
    //     const response = await apiUpdateUser({ userName, firstName, lastName });

    //     if (response.status === 200){
    //         localStorage.setItem('token', response.data.accessToken)
    //     }
    // };

    return (
        <div>
            {/* Settings */}

            <div className='img p-5 md:pl-80 md:pt-20'>
                <div className='border shadow rounded h-auto md:h-11/12 w-full md:w-3/5 p-6 bg-white'>
                    <p className='text-2xl md:text-3xl pb-5'>Profile</p>
                    <span className='border-2 shadow-sm rounded-full w-12 h-12 mb-4 p-2 inline-block text-center'>
                        avtr
                    </span>
                    <p className='text-lg md:text-xl pt-3'>John Doe</p>
                    <p className='text-sm md:text-base'>info@gmail.com</p>

                    <p className="text-2xl md:text-3xl my-5 text-center">Change Details</p>
                    <div className='form-popup myForm'>
                        <form className='form-container'>
                            <label htmlFor="image" className="block text-sm font-medium">Image</label>
                            <input type="file" className="w-full mb-3" />

                            <label htmlFor="userName" className="block text-sm font-medium">User Name</label>
                            <input type="text" name='userName' placeholder='User name' className="w-full mb-3 p-2 border rounded" />

                            <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                            <input type="text" name='firstName' placeholder='First Name' className="w-full mb-3 p-2 border rounded" />

                            <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                            <input type="text" name='lastName' placeholder='Last Name' className="w-full mb-3 p-2 border rounded" />

                            {/* <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input type="email" name='email' placeholder='Email' className="w-full mb-3 p-2 border rounded" /> */}

                            <button className='w-full py-2 mt-3 bg-blue-500 text-white rounded hover:bg-blue-600'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Settings;