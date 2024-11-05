import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'


const UserDashboardLayout = () => {
  return (
    <div>
      {/* UserDashboardLayout */}
      
        <div>
        <Navbar/>
        <Sidebar/>
        </div>
      

        <Outlet/>

    </div>
  )
}

export default UserDashboardLayout;