import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'



const UserDashboardLayout = () => {
  return (
    <div>
      {/* UserDashboardLayout */}


      <div className='flex'>
        <div className='flex'>
          <Sidebar />
          {/* <Navbar /> */}
        </div>

        <Outlet />

      </div>
    </div>
  )
}

export default UserDashboardLayout;