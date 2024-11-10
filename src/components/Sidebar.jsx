
// import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState } from "react";


const Sidebar = () => {
  // State to manage the collapsed state
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle collapse state
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div> {/* Sidebar */}

      <div
        className={`fixed flex flex-col h-screen ${isCollapsed ? 'w-16' : 'w-1/5'
          } bg-slate-50 border transition-all duration-300`}
      >
        {/* Toggle Button */}
        <div className="flex gap-3 py-5 ">
          <button onClick={toggleSidebar}>
            <GiHamburgerMenu className="text-3xl ml-2" />
          </button>

        </div>

        {/* User Info (Hidden when collapsed) */}
        {!isCollapsed && (
          <div className=" h-14 w-22 p-2 mx-2 pb-2 ">
            {/* <div>
            <span className="rounded-full w-5 h-10 bg-blue-100 m-2 p-2">avatar</span>
            <span>Username</span>
            </div> */}

            <Link to="chats"><span className="flex text-xl gap-3"><IoHomeOutline className="text-2xl" /> Home</span></Link>
            <span className="flex text-xl gap-3"><LuCalendarCheck2 className="text-2xl" /> Calender</span>
            <Link to='add'><span className="flex text-xl gap-3"><IoIosAddCircleOutline className="text-2xl" /> Add</span></Link>
            {/* <span>See All Rooms</span> */}
            <Link to="settings"><span className="flex text-xl gap-3 mt-96 "><HiOutlineCog6Tooth className="text-2xl" />Settings</span></Link>


          </div>
        )}


      </div>

    </div>
  );
}

export default Sidebar;