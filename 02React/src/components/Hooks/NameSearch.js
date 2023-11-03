import React, { useState } from 'react'

const person_names = [
    "Alice Johnson",
    "Bob Smith",
    "Eva Davis",
    "Michael Brown",
    "Sophia Martinez",
    "David Lee",
    "Olivia Wilson",
    "Daniel Taylor",
    "Isabella Anderson",
    "James Clark",
    "Mia Thomas",
    "William Hernandez",
    "Charlotte White",
    "John Garcia",
    "Emma Jones",
    "Matthew Rodriguez",
    "Ava Jackson",
    "Andrew Wilson",
    "Emily Lewis",
    "Joseph Moore"
]
const NameSearch = () => {
  console.log("Component Rendered")
  console.log("first           cnjdncjs")
  const [filterArray, setfilterArray] = useState(person_names)
    const handleSearch=(event) => {
        console.log(event.target.value);
        const modifiedFilters = person_names.filter(name =>name.toLowerCase().includes((event.target.value.toLowerCase())))
        setfilterArray(modifiedFilters);
    }

  return (
    <div>
        <h2>Name Search</h2>
        <div>
            <label htmlFor='Name'>Search</label>
            <input onChange={handleSearch} id="Name" type="text" placeholder='Search Your name'/>
        </div>
        <ol>
            {filterArray.map(person_name => (
                <li key={person_name}>{person_name}</li>
            ))}
        </ol>
    </div>
  )
}

export default NameSearch