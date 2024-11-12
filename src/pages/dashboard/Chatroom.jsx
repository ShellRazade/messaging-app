import React from 'react'

const Chatroom = () => {
  return (
    <div>
      {/* Chatroom */}

      {/* <div className="overflow-y-scroll max-h-96 p-5">Scrollable container */}
      <div className='pl-80 pt-20'>
        <div className='border shadow rounded h-4/6 w-4/5 p-6'>
          <img src="" alt="" />
        </div>

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



      </div>
      {/* </div> */}


    </div>

  )
}

export default Chatroom;