import React from 'react'
import { Link, Outlet } from 'react-router'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function RoutTemplate() {
  return (
    <div>

        
        {/* <div>
          <Link to="/">Home</Link>
          <Link to="/category">Category</Link>
          <Link to="/product">Product</Link>
          <Link to="/sale">Sale</Link>
          <Link to="/report">Report</Link>
        </div> */}
        <Header/>
        <div className='flex'>
          <div className= ''>
            <Sidebar/>
          </div>
          <div>
            <Outlet/>
          </div>
        </div>

        
        
    </div>
  )
}

export default RoutTemplate