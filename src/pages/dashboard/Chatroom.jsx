import React from 'react'
import Users from '../../components/Users';



const Chatroom = () => {

  
  return (
    <div>
      {/* Chatroom */}


      <div className='pl-80 pt-20 pb-14'>
        <div className='border shadow rounded h-4/6 w-4/5 p-6'>
          <img src="" alt="" />
        </div>

        <div className='flex gap-12'>
          <div className='border shadow rounded h-4/6 w-3/5 p-10 mt-6'>
            <div>
              <div className='flex gap-3'>
                <span className='w-15 h-15 border shadow-sm rounded-full p-4'>avtr</span>
                <p className='mt-4'> Username</p>
              </div>
              <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nemo at quae perferendis quidem non ab, ad earum beatae placeat sed velit asperiores quia nobis. Aspernatur vero enim ea! Deleniti.</p>
            </div>

            <input type="text" name='' placeholder='Comment here' className='p-3 bg-slate-50 rounded border border-gray-300 mt-3 w-4/5' />
          </div>

          <Users />
        </div>

      </div>








    </div>

  )
}

export default Chatroom;