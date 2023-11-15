import React from 'react'

const CountryCard = (props) => {
    const {flags,capital,area,name,}=props.eachCountry
  return (
    <li >
        <div className='bg-dark-subtle rounded-3 m-3 p-3 d-flex justify-content-around  align-items-center '>
            <div>
            <h3>{name}</h3>
            <p>{capital}</p>
            <p className='text-bg-success '>Area-{area}</p>
            </div>
            <div>
                <img className='h-25 w-50' src={flags.png} alt={name} />
            </div>
        </div>
    </li>
  )
}

export default CountryCard