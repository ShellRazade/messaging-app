import { LuSendHorizonal } from "react-icons/lu";
import { IoImageOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { apiPostChats, apiPostImage } from "../../services/chat";
import { useState } from "react";
import avatar from '../../assets/images/avatar.jpg'
import useSWR from "swr";
import { fetcher } from "../../services/config";


const Chatroom = () => {
  // States for managing messages, user data, and uploaded image URL
  const [searchParams] = useSearchParams();
  const [imageUrl, setImageUrl] = useState('');

  // Filter for SWR endpoint
  const filter = JSON.stringify({
    room: searchParams.get('room')
  });
  // Fetch with SWR
  const { data, error, isLoading, mutate } = useSWR(`/messages?filter=${filter}`, fetcher);

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
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  // Image upload preview and submission
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('room', searchParams.get('room'));
      await apiPostImage(formData);
      // Optionally: Refresh messages or image after upload
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mt-16 ml-16 pl-16">
        <div className="border shadow h-1/5 w-[60vw] p-10 mb-7">
          <p className="text-center">{searchParams.get("room")}</p>
        </div>

        <div>
          {isLoading ? <p>Loading messages...</p> :
            error ? <p>Failed to fetch messages...</p> :
              data.map((message, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 p-3">

                    <span>
                      <img className='w-16 h-16 border shadow-sm rounded-full border-white' src={avatar}
                        alt="avatar" /></span>
                    <p className='text-sm mt-5'> {message?.user?.email || 'John@gmail.com'}</p>
                    <p className="mt-2 md:mt-4 text-sm md:text-base">
                      {message?.user?.userName || 'John Doe'}
                    </p>

                  </div>
                  {message.content ? <p className="mt-4 text-sm md:text-base pb-5 border-b-[1px]">
                    {message.content}
                  </p> : <img src={`https://savefiles.org/${message.image}?shareable_link=532`} className="w-3/12 h-2/12" />}
                </div>
              ))}
          {imageUrl && <img src={imageUrl} alt="Uploaded" className="my-4 rounded" />}
        </div>

        {/* Message Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 mt-3">
          <div className="relative text-2xl">
            <IoImageOutline />
            <input type="file" name="file" onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer justify-center" />
          </div>
          <input type="text" name="content" placeholder="Comment here"
            className="p-3 bg-slate-50 rounded border border-gray-300 mb-3 w-full md:w-9/12" />
          <button type="submit" className="text-2xl">
            <LuSendHorizonal />
          </button>
        </form>

      </div>
    </div>

  );
};

export default Chatroom;
