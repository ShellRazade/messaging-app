
import login from '../../assets/images/login.png'




const UserLogin = () => {
  return (
    <div className='md:flex min-h-screen justify-center items-center align-middle md:mx-80'>
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
          </form>
        </div>
      </div>

      <div className='hidden md:block max-w-md mx-auto'>
        <img src={login} alt="" />
      </div>
    </div>
  )
}

export default UserLogin;