import { useState, useEffect } from 'react'

import axios from 'axios'
import CountriesList from './components/CountriesList'
import Filter from './components/Filter'

import { IoMoonOutline } from 'react-icons/io5'

import './index.css'
import Nav from './components/Nav'

const App = () => {
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

  const showCountry = country => {
    setQuery(country)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className=' bg-slate-200'>
      <Nav />

      <Filter
        {...{ query }}
        {...{ filterHandler }}
        {...{ setRegion }}
      />

      <CountriesList
        query={query}
        showCountry={showCountry}
        filteredCountries={filteredCountries}
      />
    </div>
  )
}

export default App
