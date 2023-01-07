import React from 'react'

import { BsSearch } from 'react-icons/bs'

const Filter = props => {
  const { query, filterHandler, setRegion } = props
  return (
    <div className='flex justify-between pb-12 pt-8 font-semibold text-md items-center my-8 mx-20'>
      <div className='flex space-x-4 items-center  border rounded-lg border-gray-300 bg-white shadow-lg py-4 px-8'>
        <BsSearch className='' />
        <input
          className=' appearance-none   w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
          value={query}
          onChange={filterHandler}
          placeholder='Search for a country...'
        />
      </div>

      <div>
        <select
          className=' border border-gray-300 py-3 px-8 rounded-lg'
          name='region'
          id='region'
          onChange={event => {
            setRegion(event.target.value)
          }}
        >
          <option value={''}>Filter by Region</option>
          <option value=''></option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
