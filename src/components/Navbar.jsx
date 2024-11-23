import { apiSearch } from '../services/chat';
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
const [rooms, setRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = async (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filter = JSON.stringify({
      name: { "$regex": query, "$options": "i" }
    });
    const response = await apiSearch(filter);
    setRooms(response.data);
  };


  return (
    <div> {/* Navbar */}
      <div className='justify center items-center'>
      <div>
        <input type="text" value='' className='bg-black ml w-4/12 p-3 rounded-full' />
        <button className=""><CiSearch /></button>
      </div>
      </div>

    </div>
  )
}

export default Navbar;