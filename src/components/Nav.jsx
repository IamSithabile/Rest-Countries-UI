import React, { useState } from 'react'
import { IoMoonOutline } from 'react-icons/io5'

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className='bg-white dark:bg-gray-900 w-full py-4 px-10 md:py-8 md:px-14 lg:px-20 mb-4  shadow-md absolute top-0 left-0 right-0 z-10'>
      <div className='flex justify-between  shadow-gray-300'>
        <h2 className='md:text-3xl text-xl font-bold '>Where in the world?</h2>

        <div className='flex items-center space-x-4 text-md font-semibold'>
          <IoMoonOutline />
          <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
