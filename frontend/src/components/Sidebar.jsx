import React from 'react'
import { IoHome } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCrisisAlert } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { Link } from 'react-router';

function Sidebar() {
  return (
    <div className=' '>
          <div className=' w-64 bg-cyan-400 max-md:hidden'>
              <div className=''>
                  <Link to='/'>
                      <div className='nav-bar'>
                          <IoHome />
                          <p>ផ្ទាំងដើម</p>
                      </div>
                  </Link>
              </div> 
              <div className=''>
                  <Link to='/product'>
                      <div className='nav-bar'>
                          <AiOutlineProduct />
                          <p>ប្រភេទទំនិញ</p>
                      </div>
                  </Link>
              </div> 
              <div className=''>
                  <Link to='/sale'>
                      <div className='nav-bar '>
                          <MdOutlineCrisisAlert />
                          <p>ការលក់</p>
                      </div>
                  </Link>
              </div> 
              <div className=''>
                  <Link to='/report'>
                      <div className='nav-bar'>
                          <HiDocumentReport />
                          <p>របាយការណ៍</p>
                      </div>
                  </Link>
              </div> 


          </div>

    </div>
  )
}

export default Sidebar