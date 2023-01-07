import React from 'react'

const CountryCard = ({ country }) => {
  const { name, capital, flags, region, population } = country

  console.log(country)

  return (
    <div className='w-1/6 h-auto  shadow-md shadow-gray-400 text-lg  bg-slate-50'>
      <div className='rounded-lg'>
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
    </div>
  )
}

export default CountryCard
