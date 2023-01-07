import React from 'react'
import Country from './Country'
import CountryCard from './CountryCard'

const CountriesList = props => {
  const { filteredCountries, showCountry, query } = props
  //   console.log("countries in the coultriesList component", filteredCountries);

  if (filteredCountries.length === 1) {
    return <Country filteredCountries={filteredCountries} />
  }

  return (
    <div className='px-20'>
      <ul className='flex flex-wrap justify-between gap-6 gap-y-16'>
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
