import login from '../../assets/images/login.png'

const UserRegister = () => {
  return (
    <div>UserRegister
      <div>
        <div className='flex'>
          <form action="" className='border shadow-lg rounded-lg h-5/6 max-w-md mx-auto p-5'>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>First Name</label>
              <input type="text" name='firstName' placeholder='First Name'/>
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>Last Name</label>
              <input type="text" name='lastName' placeholder='Last Name'/>
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>Email</label>
              <input type="email" name='email' placeholder='Email'/>
            </div>

            <div className='flex gap-2 pb-5'>
              <label htmlFor="" className='text-xl font-semibold'>Password</label>
              <input type="password" name='password' placeholder='Password'/>
            </div>

            <button className='border shadow-md w-max p-2'>Register</button>
          </form>

          <div className='max-w-md mx-auto'>
            <img src={login} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserRegister;