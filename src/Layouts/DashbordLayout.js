import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../scenes/global/TopBar';
import SideBar from '../scenes/global/SideBar';
function DashbordLayout() {
  return (
    <div className="app">
        <SideBar/>
        <main className='content'>
            <TopBar/>
            <Outlet/>
        </main>
    </div>
  )
}

export default DashbordLayout