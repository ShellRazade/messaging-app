
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
        <div className="flex gap-3 py-5 pb-5">
          <button onClick={toggleSidebar}>
            <GiHamburgerMenu className="text-4xl ml-2" />
          </button>

        </div>

         {/* User Info (Hidden when collapsed) */}
      {!isCollapsed && (
        <div className="h-14 w-full p-2 mx-2 mt-14 pb-2">
          <div className="flex flex-col gap-[3rem]"> {/* Add gap-[5rem] here */}
            <Link to="chats">
              <span className="flex text-xl gap-3">
                <IoHomeOutline className="text-2xl" /> Home
              </span>
            </Link>
            <span className="flex text-xl gap-3">
              <LuCalendarCheck2 className="text-2xl" /> Calendar
            </span>
            <Link to="add">
              <span className="flex text-xl gap-3">
                <IoIosAddCircleOutline className="text-2xl" /> Add
              </span>
            </Link>
            <Link to="settings">
              <span className="flex text-xl gap-3">
                <HiOutlineCog6Tooth className="text-2xl" /> Settings
              </span>
            </Link>
          </div>
        </div>
      )}
        

        {/* Display icons only when collapsed */}
        {isCollapsed && (
          <div className="flex flex-col items-center gap-6 mt-14">
            <Link to="chats" className="text-2xl">
              <IoHomeOutline />
            </Link>
            <span className="text-2xl">
              <LuCalendarCheck2 />
            </span>
            <Link to="add" className="text-2xl">
              <IoIosAddCircleOutline />
            </Link>
            <Link to="settings" className="text-2xl">
              <HiOutlineCog6Tooth />
            </Link>
          </div>
        )}
      </div>


    </div>

    
  );
}

export default Sidebar;