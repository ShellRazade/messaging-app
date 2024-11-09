
import { useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.png'
import { apiLogin } from '../../services/auth';
import { Link } from 'react-router-dom';



const UserLogin = () => {

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


  return (

    <div>
      <p className='text-4xl text-center mt-10'>Login</p>
      <div className='md:flex min-h-screen justify-center items-center align-middle md:mx-44'>
        {/* UserLogin */}

        <div className=' py-10 px-5 text-center'>
          <div className='border shadow-lg  rounded-lg max-w-md mx-auto h-4/6 place-content-center '>
            <form action="" className='flex flex-col  px-5 py-5'>
              <div className='flex gap-2 pb-5'>
                <label htmlFor="" className='text-xl font-semibold pb-3'>Email</label>
                <input type="email" name="email" id="" placeholder='Email' />
              </div>

              <div className='flex gap-2 pb-8'>
                <label htmlFor="" className='text-xl font-semibold '>Password</label>
                <input type="text" name='password' id='' placeholder='password' />
              </div>

              <button className='border shadow-md w-max p-2 mb-3 rounded-md hover:bg-slate-100'>Login</button>

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