import React from 'react'
import NavBar from './ui/NavBar'
import {Outlet} from 'react-router-dom'


export default function Layout() {
  return (
    <div className="container">
<NavBar/>
<Outlet/>
     </div>
  )
}