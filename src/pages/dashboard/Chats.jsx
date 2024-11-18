// import { GrSend } from "react-icons/gr";
// import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { apiGetRooms } from "../../services/chat";
import { Link } from "react-router-dom";
import register2 from '../../assets/images/register2.png'

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
      <div className="px-4 md:pl-72 pt-10 md:pt-20">
  <div className="border shadow-sm rounded-lg bg-white h-auto md:h-24 w-full md:w-8/12 mb-6 md:mb-10 p-3">
    <p className="text-center pt-2 text-2xl md:text-base">
      Welcome to Chat-App!
    </p>
  </div>

  {/* Fetch Rooms from API */}
  <div className=" max-h-96 p-3 md:p-5">
    {/* Scrollable container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {rooms.map((room, index) => {
        return (
          <Link key={index} to={`/dashboard/chatroom?room=${room.id}`}>
            <div className="border shadow rounded-lg bg-white p-4 md:p-5">
              <img src={register2} alt="" className="w-full h-auto rounded" />
              <p className="pt-3 text-lg md:text-xl text-center">{room.roomName}</p>
              <p className="pt-2 text-sm md:text-base text-center">Description: {room.description}</p>
              <p className="pt-4 text-xs md:text-sm">Created At: {room.createdAt}</p>
              <p className="pt-2 text-xs md:text-sm">Updated At: {room.UpdatedAt}</p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</div>
    </div>
  )
}

export default Chats;