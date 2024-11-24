import { useNavigate } from 'react-router-dom'
import register1 from '../../assets/images/register1.png'
import React, { useState } from 'react'
import { apiSignup } from '../../services/auth'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const UserRegister = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault() //prevents page from reloading

    try {
      //prepare data for the backend
      setLoading(true)
      const formData = new FormData(event.target) //grabs data from the form

      const userName = formData.get("userName")
      const firstName = formData.get("firstName")
      const lastName = formData.get("lastName")
      const email = formData.get("email")
      const password = formData.get("password")
      console.log('first name', firstName)


      const payload = {userName, firstName, lastName, email, password }

      const response = await apiSignup(payload)
      console.log(response.data)

      navigate('/login')

      Swal.fire({
        title: "Success!",
        text: `Registration Successsful`,
        icon: "success"
      });
  

    } catch (error) {
      console.log(error)
      // toast.error("Error creating account")
      Swal.fire({
        title: "Error!",
        text: `Registration Unsuccessful`,
        icon: "error"
      });
  
    } finally {
      setLoading(false)
    }
  }
 



  return (
    <div className='img'>
      {/* UserRegister */}

      <p className='text-4xl text-center pt-10'>Register</p>

      <div className='md:flex min-h-screen justify-center items-center align-middle md:mx-52'>

        <div className='flex '>

          <form onSubmit={handleSubmit} className='border shadow-lg rounded-lg bg-white h-5/6 max-w-md mx-auto p-10'>
          <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold '>User Name</label>
              <input type="text" name='userName' placeholder='User Name' className='border border-gray-300 rounded-md p-3' required />
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>First Name</label>
              <input type="text" name='firstName' placeholder='First Name' className='border border-gray-300 rounded-md p-3' required />
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>Last Name</label>
              <input type="text" name='lastName' placeholder='Last Name' className='border border-gray-300 rounded-md p-3' required />
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>Email</label>
              <input type="email" name='email' placeholder='Email' className='border border-gray-300 rounded-md p-3' required />
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>Password</label>
              <input type="password" name='password' placeholder='Password' className='border border-gray-300 rounded-md p-3' required />
            </div>

            <button type='submit' className='border rounded-md hover:bg-slate-100 shadow-md w-max p-2'>{loading ? "Loading..." : "Register"}</button>

            <div className='text-center mt-3'>
              <p>Already have an account? Then</p>
              <Link to='/login' className='text-blue-600'>Login</Link>
            </div>
          </form>

          <div className='max-w-md mx-auto'>
            <img style={{ width: '700px', height: 'auto' }} src={register1} alt="register" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserRegister;