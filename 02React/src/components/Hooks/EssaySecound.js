import React, { useContext } from 'react'
import { LanguageContext } from '../context/userData'

const EssaySecound = (props) => {
    // const {selectedOption}=props
    const selectedLang = useContext(LanguageContext)



    const langObj={
        English:"Hello React",
        Hindi:"नमस्ते प्रतिक्रिया",
        Tamil:"ஹலோ ரியாக்ட்",
        Telugu:"హలో రియాక్ట్"
    }
  return (
    <div>
        <h2>{langObj[selectedLang]}</h2>
    </div>
  )
}

export default EssaySecound