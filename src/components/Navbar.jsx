
import { useState } from 'react'

const Navbar = () => {

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
      <div>
        <div>
          <div className='flex bg-slate-50 fixed top-0 right-0 left-0 gap-40 justify-around border shadow-md'>

            <div className="flex">
              <input type="text" value={searchQuery} onChange={handleSearch} className="p-2 my-2 w-96 rounded-xl shadow-md" name='search' placeholder='Search' />
              <button type='submit' className="text-xl m-2 border shadow p-2 rounded-md">Search </button>

              {/* <span className="rounded-full w-12 h-12 bg-blue-100 p-2 ">avtr</span> */}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar;