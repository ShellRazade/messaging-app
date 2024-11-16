import { LuSendHorizonal } from "react-icons/lu";
import Users from '../../components/Users';
import { useSearchParams } from "react-router-dom";
import { apiGetMessage, apiPostChats } from "../../services/chat";
import { useEffect, useState } from "react";



const Chatroom = () => {
  //Post messagesto the API
  const [searchParams] = useSearchParams()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //collect form data
      const formData = new FormData(event.target);
      //post data to API
      const response = await apiPostChats({
        content: formData.get('content'),
        room: searchParams.get('room')
      })

    } catch (error) {
      console.log(error)
    }
  }
  //Get messages to the API
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const fetchMessage = async () => {
      const response = await apiGetMessage();
      setMessage(response.data)
      console.log(message)
    };
    fetchMessage();
  }, []);

  return (
    <div>
      {/* Chatroom */}



      <div className='px-4 md:pl-80 pt-10 md:pt-20 pb-10'>
        <div className='border shadow rounded h-auto md:h-4/6 w-full md:w-4/5 p-4 md:p-6'>
          <img src="" alt="" className="w-full h-auto rounded mb-4" />
          <p className="text-center">{searchParams.get("room")}</p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 md:gap-12 mt-6'>
          <div className='border shadow rounded h-auto md:h-4/6 w-full md:w-3/5 p-5 md:p-10'>
            <div className="flex items-center gap-3">
              <span className='w-12 h-12 border shadow-sm rounded-full p-4'>avtr</span>
              <p className='mt-2 md:mt-4 text-sm md:text-base'>Username</p>
            </div>
            <p className='mt-4 text-sm md:text-base'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nemo at quae perferendis quidem non ab, ad earum beatae placeat sed velit asperiores quia nobis. Aspernatur vero enim ea! Deleniti.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2 mt-3">
              <input type="text" name='content' placeholder='Comment here' className='p-3 bg-slate-50 rounded border border-gray-300 w-full md:w-4/5' />
              <button type="submit" className="text-2xl"><LuSendHorizonal /></button>
            </form>
          </div>

          <div className="w-full md:w-1/5">
            <Users />
          </div>
        </div>
      </div>






    </div>

  )
}

export default Chatroom;