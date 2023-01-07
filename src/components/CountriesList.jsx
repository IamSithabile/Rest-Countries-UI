import React from 'react'
import Country from './Country'

import CountryCard from './CountryCard'

const CountriesList = props => {
  const { filteredCountries } = props

  if (filteredCountries.length === 1) {
    return <Country {...{ filteredCountries }} />
  }

  return (
    <div className='px-10 md:px-20'>
      <ul className=' flex flex-col md:flex-row w-full items-center md:justify-between flex-wrap md:gap-x-4 gap-y-12 md:items-stretch'>
        {filteredCountries.map(country => {
          return (
            <>
              <CountryCard
                {...{ country }}
                key={country.name.common}
              />
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default CountriesList
