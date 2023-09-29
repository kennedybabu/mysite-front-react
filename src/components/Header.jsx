import React from 'react'
import { FaSistrix, FaUserCircle, FaRegBell } from 'react-icons/fa';
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsBag} from "react-icons/bs"



const Header = () => {
  return (
    <div className='p-2 fixed top-0 right-0 z-20 bg-white border-b border-gray-100 grid justify-items-start h-[80px] px-4 min-w-[1235px] shadow-sm'>
         <div className="flex flex-row items-center px-2 justify-between w-full">
            <div className='flex items-center'>
                < FaSistrix />
                <input type="text" placeholder='search' className='align-left mx-2 outline-none'/>
            </div>

            <div className='flex flex-row'>
                <div className='p-1 h-[30px] mx-2 cursor-pointer bg-gray-100 rounded-full flex items-center aspect-square justify-center'>
                    < FaUserCircle />
                </div>

                <div className='p-1 h-[30px] mx-2 cursor-pointer bg-gray-100 rounded-full flex items-center aspect-square justify-center'>
                    < FaRegBell />
                </div>

                <div className='p-1 h-[30px] mx-2 cursor-pointer bg-gray-100 rounded-full flex items-center aspect-square justify-center'>
                    < HiOutlineMailOpen />
                </div>

                <div className='p-1 h-[30px] mx-2 cursor-pointer bg-gray-100 rounded-full flex items-center aspect-square justify-center'>
                    < BsBag />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header