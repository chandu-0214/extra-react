import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
let url = 'https://restcountries.com/v2/all'

const CountriesProject = () => {
    const [countriesData, setCountriesData] = useState([])
    const [filteredData, setfilteredData] = useState([])


    useEffect(() => {
        // side effects
        const fetchingTheData = (url)=>{
            fetch(url)
         .then((response)=>response.json())
         .then((data)=>{
          console.log(data)
            setCountriesData(data)
            setfilteredData(data)
         })
         .catch((error)=>console.log(error,"error"))
         }
         fetchingTheData(url)

    },[])
    const handleInput=(event)=>{
      const inputValue = event.target.value
      console.log(inputValue)
      const filteredData = countriesData.filter(country => (country.name).toLowerCase().includes(inputValue.toLowerCase()))
      setfilteredData(filteredData)
      console.log(filteredData)


    }
    

  return (
    <div>
        <h2 className='text-bg-info  p-4 m-4 w-col-6 rounded-5 '>Countries Page</h2>
        <div className='d-flex justify-content-center align-items-center p-2 m-2'>
            <label>Country</label>
            <input onChange={handleInput} type="search" className="form-control p-2 m-2" placeholder="Search Country....."/>
        </div>
        {/* Shimmmer UI */}
        {!filteredData.length ?<h1>Loading.....</h1>:<div className='CountryContainer'>
         <ul className='list-unstyled '>
            {filteredData.map((eachCountry,index)=><CountryCard countriesData={countriesData} key={index}eachCountry={eachCountry}/>)}
         </ul>
        </div>}
    </div>
  )
}

export default CountriesProject