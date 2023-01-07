import React from 'react'
import { IoMoonOutline } from 'react-icons/io5'

const Nav = () => {
  return (
    <div className='bg-white w-full py-8 px-20 mb-4  shadow-md'>
      <div className='flex justify-between  shadow-gray-300'>
        <h2 className='text-3xl font-bold '>Where in the world?</h2>

        <div className='flex items-center space-x-4'>
          <IoMoonOutline className='text-lg font-semibold' />
          <button className='text-lg font-semibold'>Dark Mode</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
