import React from 'react'

const CountryCard = (props) => {
    const {flags,capital,area,name,borders}=props.eachCountry
    const getBorders = () => {
      const broderData = borders.map(eachBorder => {
        const filteredBorder = props.countriesData.filter(eachItem=>{
          if(eachItem.alpha3Code === eachBorder){
            return eachItem.name
          }
        })
        return filteredBorder
      })
      const NamesBorder = broderData.map(eachItem=>eachItem[0].name)
      return NamesBorder
    }
  return (
    <li >
        <div className='bg-dark-subtle rounded-3 m-3 p-3 d-flex justify-content-around  align-items-center '>
            <div>
            <h3>{name}</h3>
            <p>{capital}</p>
            <p className='text-bg-success '>Area-{area}</p>
            <p>Border(s) : {borders?.length ? getBorders().join(', '):"No Borders"}</p>
            </div>
            <div>
                <img className='h-25 w-50' src={flags.png} alt={name} />
            </div>
        </div>
    </li>
  )
}

export default CountryCard