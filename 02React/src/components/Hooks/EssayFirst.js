import React, { useContext } from 'react'
import { LanguageContext } from '../context/userData'

const EssayFirst = (props) => {
    // const {selectedOption}=props
    const selectedLang = useContext(LanguageContext)
    console.log(selectedLang)

    const langObj={
        English:"Hello World",
        Hindi:"हैलो वर्ल्ड",
        Tamil:"வணக்கம் உலகம்",
        Telugu:"హలో వరల్డ్"
    }
  return (
    <div>
        <h2>{langObj[selectedLang]}</h2>
    </div>
  )
}

export default EssayFirst