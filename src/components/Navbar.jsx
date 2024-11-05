
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div> {/* Navbar */}
      <div>
        <div>
          <div className='flex bg-slate-50 fixed right-0 w-3/4 gap-40 justify-around border shadow-md rounded-b-xl'>
            <div className="flex gap-2">
              <span className="rounded-full max-w-20 min-h-10 bg-blue-100 my-3">avatar</span>
              <p className="m-3">Username</p>
            </div>

            <div className="flex">
              <input type="text" className="p-3 my-2 w-96 rounded-xl shadow-md"/>
              <button><FaSearch className="text-3xl m-2"/></button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar;