import { useNavigate } from 'react-router-dom'
import register1 from '../../assets/images/register1.png'
import React, { useState } from 'react'
import { apiSignup } from '../../services/auth'
import { Link } from 'react-router-dom'

const UserRegister = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault() //prevents page from reloading

    try {
      //prepare data for the backend
      setLoading(true)
      const formData = new FormData(event.target) //grabs data from the form

      const firstName = formData.get("firstName")
      const lastName = formData.get("lastName")
      const email = formData.get("email")
      const password = formData.get("password")
      console.log('first name', firstName)


      const payload = { firstName, lastName, email, password }
      const response = await apiSignup(payload)
      console.log(response.data)

      navigate('/')

    } catch (error) {
      console.log(error)
      // toast.error("Error creating account")
    } finally {
      setLoading(false)
    }
  }





  return (
    <div>
      {/* UserRegister */}

      <p className='text-4xl text-center mt-10'>Register</p>

      <div className='md:flex min-h-screen justify-center items-center align-middle md:mx-52'>

        <div className='flex '>

          <form onSubmit={handleSubmit} className='border shadow-lg rounded-lg h-5/6 max-w-md mx-auto p-5'>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>First Name</label>
              <input type="text" name='firstName' placeholder='First Name' required />
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>Last Name</label>
              <input type="text" name='lastName' placeholder='Last Name' required />
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>Email</label>
              <input type="email" name='email' placeholder='Email' required />
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>Password</label>
              <input type="password" name='password' placeholder='Password' required />
            </div>

            <button type='submit' className='border rounded-md shadow-md w-max p-2'>{loading ? "Loading..." : "Register"}</button>

            <div className='text-center mt-3'>
              <p>Already have an account? Then</p>
              <Link to='/' className='text-blue-600'>Login</Link>
            </div>
          </form>

          <div className='max-w-md mx-auto'>
            <img src={register1} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserRegister;