import { LuSendHorizonal } from "react-icons/lu";
import { IoImageOutline } from "react-icons/io5";
import Users from '../../components/Users';
import { useSearchParams } from "react-router-dom";
import { apiGetMessage, apiGetUser, apiPostChats, apiPostImage } from "../../services/chat";
import { useEffect, useState } from "react";
import avatar from '../../assets/images/avatar.jpg'


const Chatroom = () => {
  // States for managing messages, user data, and uploaded image URL
  const [searchParams] = useSearchParams();
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  // Handle search query change
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      await apiPostChats({
        content: formData.get('content'),
        room: searchParams.get('room')
      });
      // Optionally: Refresh messages after posting a new one
      fetchMessages();
    } catch (error) {
      console.log(error);
    }
  };

  // Image upload preview and submission
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      await apiPostImage({ /* add necessary payload data here */ });
      // Optionally: Refresh messages or image after upload
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch messages from the API
  const fetchMessages = async () => {
    try {
      const response = await apiGetMessage();
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch user from API
  const fetchUser = async () => {
    try {
      const response = await apiGetUser();
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
    fetchUser();
  }, []);

  return (
    <div className="img px-4 md:pl-80 pt-10 md:pt-20 pb-10 ">
     
      {/* Room Header */}
      <div className="border shadow rounded h-auto md:h-4/12 w-full bg-white md:w-10/12 p-4 md:p-6">
        <img src='' alt="" className="w-full h-auto rounded mb-4" />
        <p className="text-center">{searchParams.get("room")}</p>
      </div>

      {/* Messages and User Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-6">
        {/* Messages Section */}
        <div className="border shadow rounded h-auto md:h-4/6 w-full md:w-10/12 p-5 md:p-10 bg-white">
          {messages.map((message, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 p-3">
              
                <span >
                  <img className='w-10 h-10 border shadow-sm rounded-full  border-white'  src={avatar} alt="avatar" /></span>

                <p className='text-sm mt-5'>info@gmail.com</p>
                <p className="mt-2 md:mt-4 text-sm md:text-base">
                  {user?.user?.userName || 'John Doe'}
                </p>
              </div>
              <p className="mt-4 text-sm md:text-base pb-5 border-b-[1px]">
                {message.content}
              </p>
            </div>
          ))}
          {imageUrl && <img src={imageUrl} alt="Uploaded" className="my-4 rounded" />}

          {/* Message Input Form */}
          <form onSubmit={handleSubmit} className="flex gap-2 mt-3">
            <div className="relative text-2xl">
              <IoImageOutline />
              <input
                type="file"
                name="file"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <input
              type="text"
              name="content"
              placeholder="Comment here"
              className="p-3 bg-slate-50 rounded border border-gray-300 w-full md:w-4/5"
            />
            <button type="submit" className="text-2xl">
              <LuSendHorizonal />
            </button>
          </form>
        </div>

        {/* Users Component (uncomment if needed) */}
        {/* 
        <div className="w-full md:w-1/5">
          <Users />
        </div> 
        */}
      </div>
    </div>
  );
};

export default Chatroom;
