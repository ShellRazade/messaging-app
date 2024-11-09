import { useNavigate } from 'react-router-dom'
import register1 from '../../assets/images/register1.png'
import React, { useState } from 'react'
import { apiSignup } from '../../services/auth'

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
      <div>
        <div className='flex mt-10'>
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

            <button type='submit' className='border shadow-md w-max p-2'>{loading? "Loading..." : "Register"}</button>
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