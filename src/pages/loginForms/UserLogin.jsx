
import { useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.png'
import { apiLogin } from '../../services/auth';
import { Link } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from 'react';


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
    if (response.data === 200) {
      localStorage.setItem('token', response.data.accessToken);
    }
    navigate('/dashboard')
  }



  //Darkmode function
  const [isDarkMode, setIsDarkMode] = useState(false);
  //Apply saved theme preference on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    setIsDarkMode(!isDarkMode); // Update state after toggling
  },[]);

  //Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (

    <div className="min-h-screen light: bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* <button className='text-3xl justify-center '><MdDarkMode /></button> */}

      {/* Dark mode toggle button */}
      <button onClick={toggleDarkMode} className="text-3xl justify-center p-2">
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>

      <p className='text-4xl text-center mt-10'>Login</p>
      <div className='md:flex min-h-screen justify-center items-center align-middle md:mx-44'>
        {/* UserLogin */}

        <div className=' py-10 px-5 text-center'>
          <div className='border shadow-lg  rounded-lg max-w-md mx-auto h-4/6 place-content-center bg-white dark:bg-gray-800 transition-colors duration-300'>
            <form onSubmit={handleSubmit} className='flex flex-col  px-5 py-5'>

              <div className='flex gap-2 pb-5'>

                <label htmlFor="" className='text-xl font-semibold pb-3'>Email</label>
                <input type="email" name="email" id="email" placeholder='Email' className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"/>
              </div>

              <div className='flex gap-2 pb-8'>
                <label htmlFor="" className='text-xl font-semibold '>Password</label>
                <input type="text" name='password' id='password' placeholder='Password' className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
              </div>

              <button className='border shadow-md w-max p-2 mb-3 rounded-md hover:bg-slate-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'>Login</button>

              <div className='mt-2'>
                <p>Don't have an account? Then</p>
                <Link to='/register' className='text-blue-600'>Register</Link>
              </div>

            </form>
          </div>
        </div>

        <div className='hidden md:block max-w-md mx-auto'>
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  )
}

export default UserLogin;