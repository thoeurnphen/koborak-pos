import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <div className='bg-cyan-400 p-4'>
        <div className=' flex justify-between items-center p-2'>
            <div className='flex gap-2 items-center header'>
              <div className='md:hidden'>
                {/* <CiMenuKebab  className='size-5'/> */}
                <IoMenu className='size-5'/>
              </div>
              <div className='koborak'>
                  Koborak
              </div>
              
              
            </div>
            <div className=' flex gap-2 items-center'>
              <button className=' header border px-4 rounded'>POS</button>
              <button className='header border px-4 rounded'>SUPPER</button>
            </div>
        </div>
    </div>
  )
}

export default Header