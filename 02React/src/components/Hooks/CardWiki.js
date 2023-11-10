import React from 'react'

const CardWiki = (props) => {
    const {title,link,description}= props.eachItem
  return (
    <li className='list-unstyled bg-info-subtle p-2 m-2 border-secondary-subtle rounded-start-3 '>
        <h2>{title}</h2>
        <a href={link}>{link}</a>
        <p>{description}</p>
    </li>
  )
}

export default CardWiki