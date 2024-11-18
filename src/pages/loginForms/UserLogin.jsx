
import { useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.png'
import { apiLogin } from '../../services/auth';
import { Link } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const UserLogin = () => {

  //Post Details to the API
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    //logic to handle submit goes here
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('email', email, 'password', password);
    const response = await apiLogin({ email, password })
    console.log("response--->", response.data)

    if (response.status === 200) {
      localStorage.setItem('token', response.data.accessToken);

      Swal.fire({
        title: "Success!",
        text: `Login Successsful`,
        icon: "success"
      });
  
    }
    navigate('/dashboard')
  }

 
     
  

  return (

    <div className="min-h-screen bg-white">

      <button className="text-3xl justify-center p-2"></button>

      <p className="text-4xl text-center mt-2">Login</p>

      <div className="md:flex min-h-screen justify-center items-center align-middle md:mx-44">
        <div className=" px-5 text-center">
          <div className="border shadow-lg rounded-lg max-w-md mx-auto h-4/6 place-content-center bg-white ">
            <form onSubmit={handleSubmit} className="flex flex-col px-20 py-16">
              {/* <div className="flex gap-2 pb-5"> */}
                <label htmlFor="email" className="text-xl font-semibold pb-5">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-4 border border-gray-300  rounded-md mb-5" />
              {/* </div> */}

              {/* <div className="flex gap-2 pb-8"> */}
                <label htmlFor="password" className="text-xl font-semibold pb-5 ">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full p-4 border border-gray-300 rounded-md mb-5" />
              {/* </div> */}

              <button type='submit' className="border shadow-md w-max p-2 mb-3 rounded-md hover:bg-slate-100">
                Login
              </button>

              <div className="mt-2">
                <p>Don't have an account? Then</p>
                <Link to="/register" className="text-blue-600 dark:text-blue-400">Register</Link>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden md:block max-w-md my-auto">
          <img src={login} alt="Login illustration" />
        </div>
      </div>
    </div>
  )
}

export default UserLogin;