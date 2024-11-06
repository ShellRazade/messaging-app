
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div> {/* Navbar */}
      <div>
        <div>
          <div className='flex bg-slate-50 fixed top-0 right-0 left-0 gap-40 justify-around border shadow-md'>

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