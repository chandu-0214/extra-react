import React, { useState } from 'react'

const Search = () => {
    const [name, setname] = useState('')
    const handleSearch = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
  return (
    <div>
        <h2>Search</h2>
        <div>
            <label htmlFor='Name'>Search</label>
            <input onChange={handleSearch} id="Name" type="text" placeholder='Enter Your name' value={name}/>
        </div>
        <p>You entered this = {name}</p>
    </div>
  )
}

export default Search