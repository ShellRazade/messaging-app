// import { GrSend } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { apiGetRooms } from "../../services/chat";
import { Link } from "react-router-dom";

const Chats = () => {

  //Function to get all rooms from the API
  const [rooms, setRooms] = useState([]);
  const getRooms = async () => {
    const response = await apiGetRooms();
    setRooms(response.data);
    console.log(response.data)
  }
  useEffect(() => {
    getRooms();
  }, []);

  

  return (
    <div className='img '>
      {/* Chats */}

      {/* <div className='justify-self-center pt-[40%]'>
        <div className="flex gap-2">
          <input type="text" className='p-3 w-96 rounded-xl border shadow-lg' />
         <button className="text-4xl"> <GrSend /></button>
        </div>
      </div> */}
      <div className="pl-72 pt-20">
        <div className="border shadow-sm rounded-lg bg-white h-40 w-8/12 mb-3 p-3">
          <p className="text-center pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam labore magnam dignissimos voluptate odio numquam repellat fugit expedita unde quidem omnis eaque autem alias, suscipit, libero reiciendis magni! Possimus!</p>
        </div>
        {/* Fetch Rooms from API */}
        <div className="overflow-y-scroll max-h-96 p-5"> {/* Scrollable container */}

          <div className=" grid grid-cols-3 gap-1 p-3">
            {
              rooms.map((room, index) => {
                // console.log(``)
                return <Link to='/chatroom'>
                  <div className="border shadow rounded-lg h-80 w-3/12 bg-white">
                    <p>Title:{room.title}</p>
                    <p>Description:{room.description}</p>
                    <p>Created At:{room.createdAt}</p>
                    <p>Updated At:{room.UpdatedAt}</p>
                    <span><AiOutlineDelete /></span>
                  </div>
                </Link>
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Chats;