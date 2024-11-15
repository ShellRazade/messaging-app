import React from 'react'

const Settings = () => {






    return (
        <div>
            {/* Settings */}

            <div className='img p-5  pl-80 pt-20 '>
                <div className='border shadow rounded h-11/12 w-3/5 p-6 backdrop-blur-sm '>
                    <p className='text-3xl pb-5'>Profile</p>
                    <span className='border-2 shadow-sm rounded-full w-13 h-15 mb-4 p-2'>avtr</span>
                    <p className='text-xl pt-3'>John Doe</p>
                    <p className=''>info@gmail.com</p>

                    <p className="text-3xl my-5 text-center">Change Details</p>
                    <div className='form-popup myForm'>
                        <form className='form-container'>
                            <label htmlFor="">Image</label>
                            <input type="file" />

                            <label htmlFor="">User Name</label>
                            <input type="text" name='userName' placeholder='user name' />

                            <label htmlFor="">First Name</label>
                            <input type="text" name='firstName' placeholder='' />

                            <label htmlFor="">Last Name</label>
                            <input type="text" name='lastName' placeholder='' />

                            <label htmlFor="">Email</label>
                            <input type="email" name='email' placeholder='email' />



                            <button >Submit</button>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Settings;