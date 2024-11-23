import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'



const UserDashboardLayout = () => {
  return (
    <div>
      {/* UserDashboardLayout */}

      {/* <Navbar /> */}
      <div className='flex'>
        <Sidebar />

        <Outlet />

      </div>
    </div>
  )
}

export default UserDashboardLayout;