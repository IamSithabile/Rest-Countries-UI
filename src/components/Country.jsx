import { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Country = () => {
  const [country, setCountry] = useState(null)

  const params = useParams()
  const countryName = params.name
  const navigate = useNavigate()

  useEffect(() => {
    const getcountry = async countryName => {
      const request = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      )

      const response = await request.data
      setCountry(response[0])
    }
    getcountry(countryName)
  }, [countryName])

  if (country === null) return

  const languagesObjectToArray = Object.entries(country.languages)
  if (country) {
    return (
      <div className='px-10 md:px-14 ld:px-20 py-8 md:items-center h-screen'>
        <button
          className='relative top-24 py-2 px-4 border border-gray-800'
          onClick={() => {
            navigate(-1)
          }}
        >
          &larr; Back
        </button>

        <div className='md:flex w-full py-32  h-full md:items-center'>
          <div className='md:w-1/2 mb-8'>
            <img
              src={country.flags.png}
              alt={`the flag of ${country.name.common}`}
              className='h-full w-full  md:mb-0 md:h-[20rem] md:w-[30rem] lg:h-[30rem] lg:w-[40rem]'
            />
          </div>

          <div className=' md:w-1/2 lg:px-16 md:px-8 '>
            <h1 className='text-2xl font-bold pb-4 '> {country.name.common}</h1>
            <div className='md:flex md:w-full'>
              <div className='md:w-1/2'>
                <p>Population : {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region : {country.subregion}</p>
                <p> Capital : {country.capital[0]}</p>
              </div>
              <div className='md:w-1/2'>
                Languages :
                <ul>
                  {languagesObjectToArray.map(([key, language]) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className='py-4  '>
              Border Countries:
              {country.borders.map(border => (
                <li
                  key={border}
                  className=' inline-block p-1 '
                >
                  {border}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Country
