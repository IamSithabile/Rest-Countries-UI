import React, { useEffect, useState } from 'react'

import Filter from './Filter'
import CountriesList from './CountriesList'

import axios from 'axios'
import { useMatch } from 'react-router-dom'

const Homepage = () => {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('')
  const [dark, setdark] = useState(false)

  useEffect(() => {
    const getCountries = async () => {
      let request
      if (region) {
        request = await axios.get(
          `https://restcountries.com/v3.1/region/${region}`
        )
      } else {
        request = await axios.get('https://restcountries.com/v3.1/all')
      }
      const data = await request.data
      setCountries(data)
    }

    getCountries()
  }, [region])

  const filterHandler = e => {
    setQuery(e.target.value)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  const match = useMatch('/country/:name')
  const countryName = match ? match.params.name : ''

  return (
    <div className=' pt-32 bg-slate-200'>
      <Filter
        {...{ query }}
        {...{ filterHandler }}
        {...{ setRegion }}
      />
      <CountriesList
        {...{ filteredCountries }}
        {...{ countryName }}
      />
    </div>
  )
}

export default Homepage
