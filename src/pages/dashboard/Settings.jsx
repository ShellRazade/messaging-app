import React from 'react'

const Settings = () => {
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }




    return (
        <div>
            {/* Settings */}

            <div className='pl-80 pt-20'>
                <div className='border shadow rounded h-4/6 w-3/5 p-6'>
                    <p className='text-3xl pb-5'>Profile</p>
                    <div className='flex gap-10'>
                        <span className='border-2 shadow-sm rounded-full w-13 h-15 mb-4 p-2'>avtr</span>
                        <button onclick="openForm()"  className="">change</button>
                    </div>
                    <p className='text-xl pt-3'>John Doe</p>
                    <p className=''>info@gmail.com</p>

                   <div className='form-popup myForm'>
                   <form className='form-container'>
                        <label htmlFor="">Image</label>
                        <input type="file" />

                        <label htmlFor="">User Name</label>
                        <input type="text" placeholder='user name' />

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='user name' />

                        <label htmlFor="">User Name</label>
                        <input type="text" placeholder='user name' />

                        <button onclick="closeForm()">Submit</button>
                    </form>

                   </div>
                </div>

            </div>

        </div>
    )
}

export default Settings;