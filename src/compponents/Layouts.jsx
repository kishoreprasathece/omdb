import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <div>

<Navbar/>
<Topbar/>
<Outlet/>
<Footer/>
    </div>
  )
}

export default Layouts