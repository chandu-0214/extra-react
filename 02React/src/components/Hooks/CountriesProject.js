import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import useHttpRequest from './useHttpRequest'
let url = 'https://restcountries.com/v2/all'

const CountriesProject = () => {
    const [countriesData, setCountriesData] = useState([])
    const [filteredData, setfilteredData] = useState([])
    const [data,isLoading]=useHttpRequest(url)
    console.log(data,isLoading)

    useEffect(() =>{
      console.log("data recieved ")
      setfilteredData(data)
      setCountriesData(data)
    },[data])

    const handleInput=(event)=>{
      const inputValue = event.target.value
      const filteredData = countriesData.filter(country => (country.name).toLowerCase().includes(inputValue.toLowerCase()))
      setfilteredData(filteredData)
    }
    
  return (
    <div>
        <h2 className='text-bg-info  p-4 m-4 w-col-6 rounded-5 '>Countries Page</h2>
        <div className='d-flex justify-content-center align-items-center p-2 m-2'>
            <label>Country</label>
            <input onChange={handleInput} type="search" className="form-control p-2 m-2" placeholder="Search Country....."/>
        </div>
        {/* Shimmmer UI */}
        {!isLoading ?<h1>Loading.....</h1>:<div className='CountryContainer'>
         <ul className='list-unstyled '>
            {filteredData.map((eachCountry,index)=><CountryCard countriesData={countriesData} key={index}eachCountry={eachCountry}/>)}
         </ul>
        </div>}
    </div>
  )
}

export default CountriesProject