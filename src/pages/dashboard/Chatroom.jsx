import { LuSendHorizonal } from "react-icons/lu";
import Users from '../../components/Users';
import { useSearchParams } from "react-router-dom";
import { apiGetMessage, apiPostChats } from "../../services/chat";



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
  useEffect(() =>{
    const fetchMessage = async() =>{
      const response = await apiGetMessage();
      setMessage(response.data)
      console.log(message)
    };
    fetchMessage();
  }, []);

  return (
    <div>
      {/* Chatroom */}

      <div className='pl-80 pt-20 pb-14'>
        <div className='border shadow rounded h-4/6 w-4/5 p-6'>
          <img src="" alt="" />
          <p>{searchParams.get("room")}</p>
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

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input type="text" name='content' placeholder='Comment here' className='p-3 bg-slate-50 rounded border border-gray-300 mt-3 w-4/5' />
              <button type="submit" className="text-2xl"><LuSendHorizonal /></button>
            </form>
          </div>

          <Users />
        </div>

      </div>








    </div>

  )
}

export default Chatroom;