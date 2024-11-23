import React, { useEffect, useState } from 'react'
import { apiUpdateUser } from '../../services/chat';
import Swal from 'sweetalert2';
import avatar from '../../assets/images/avatar.jpg'
// import { Link, useParams } from 'react-router-dom';

const Settings = () => {

    //Update Details
    const handleSubmit = async (event) => {
        event.preventDefault();
        //logic to handle login goes here
        const formData = new FormData(event.target);
        // const userName = formData.get('userName');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        console.log('firstName', firstName, 'lastName', lastName);

        const response = await apiUpdateUser({ firstName, lastName });

        if (response.status === 200) {
            localStorage.setItem('token', response.data.accessToken)

            Swal.fire({
                title: "Success!",
                text: `Registration Successsful`,
                icon: "success"
            });
        }
    };

    return (
        <div className=''>
            {/* Settings */}
            <div className='place-content-center'>


                <div className='block md:flex gap-32 ml-10 '>
                    <div className='justify-center self-center text-center'>
                        <p className='text-3xl text-[#9078de] font-semibold mb-10'>User Profile</p>
                        <span >
                            <img className='w-40 h-40 rounded-full p-5 border-2 border-white' style={{ width: '300px', height: 'auto' }} src={avatar} alt="avatar" /></span>
                        <p className='text-xl mt-5'>info@gmail.com</p>
                    </div>

                    <div>
                        <p className='text-3xl text-[#9078de] font-semibold mb-10 mt-10'>Change Details</p>
                        <form action="" onSubmit={handleSubmit}>
                            <label htmlFor="image" className="block text-sm font-medium">Image</label>
                            <input type="file" className="w-full mb-3" />

                            <label htmlFor="userName" className="block text-xl font-medium">User Name</label>
                            <input type="text" name='userName' placeholder='User name' className="w-full mb-3 p-4 border rounded" />

                            <label htmlFor="firstName" className="block text-xl font-medium">First Name</label>
                            <input type="text" name='firstName' placeholder='First Name' className="w-full mb-3 p-4 border rounded" />

                            <label htmlFor="lastName" className="block text-xl font-medium">Last Name</label>
                            <input type="text" name='lastName' placeholder='Last Name' className="w-full mb-3 p-4 border rounded" />

                            <button type='submit' className='border rounded-md hover:bg-slate-100 shadow-md w-max p-2'>Submit</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Settings;