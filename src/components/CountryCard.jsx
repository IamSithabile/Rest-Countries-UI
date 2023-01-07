import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
  const { name, capital, flags, region, population } = country

  return (
    <Link
      to={`/country/${country.name.common}`}
      className='w-[16rem] flex-grow-0 flex-shrink-0 mb-8 block h-auto  shadow-md shadow-gray-400 text-lg  bg-slate-50'
    >
      <div>
        <img
          className='block rounded-t-md'
          src={flags.svg}
          alt={`${name.common}s flag`}
        />
      </div>
      <div className='p-8'>
        <h2 className='text-xl font-bold pb-4'>{name.common}</h2>
        <p>Population : {population}</p>
        <p>Region : {region}</p>
        <p>Capital : {capital}</p>
      </div>
    </Link>
  )
}

export default CountryCard
