
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
          <div className='flex flex-col md:flex-row bg-slate-50 fixed top-0 right-0 left-0 gap-4 md:gap-40 justify-center p-4 border shadow-md'>

            <div className="flex w-full md:w-auto justify-between md:justify-start">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="p-2 w-full md:w-96 rounded-xl shadow-md"
                name='search'
                placeholder='Search'
              />
              <button
                type='submit'
                className="text-base md:text-xl m-2 md:m-0 border shadow p-2 rounded-md">
                Search
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;