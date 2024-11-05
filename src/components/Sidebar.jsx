
// import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div> {/* Sidebar */}

      <div className=" fixed flex flex-col h-screen w-1/4 bg-slate-50 border shadow-lg rounded-b-3xl ">
        <div className="flex gap-3 py-5">
          <GiHamburgerMenu className="text-3xl" />
        </div>

        <div>
          <div className="border shadow-md rounded-lg h-14 w-80 p-2 mx-2 pb-2">
            <span className="rounded-full w-5 h-10 bg-blue-100 m-2 p-2">avatar</span>
            <span>Username</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar;