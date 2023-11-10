import React, { useEffect, useState } from 'react'
import './Hooks.css';
import CardWiki from './CardWiki';
import {Audio, Rings} from 'react-loader-spinner'


const WikiApp = () => {
const wikiURL = "https://apis.ccbp.in/wiki-search?search=";
const [fetchedData, setFetchedData] = useState([])
const [searchInput, setSearchInput] = useState('')

    useEffect(()=>{
        const fetchingTheData = (url)=>{
            fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            setFetchedData(data.search_results)
        })
        .catch((error)=>console.log(error,"error"))
        }
        if(searchInput){
            fetchingTheData(wikiURL+searchInput)
        }
    },[searchInput])

    const handleInput=(event)=>{
        if(event.key === "Enter" && event.target.value !== ""){
            setSearchInput(event.target.value)
            console.log(event.target.value)
        }

    }

  return (
    <div>
        <h2>Wiki - Application</h2>
        <div>
            <img  src='https://png.pngtree.com/thumb_back/fh260/background/20220111/pngtree-wikipedia-home-page-home-page-web-wikipedia-photo-image_15672812.jpg' className='w-50 p-2 m-2' alt={"wiki"}/>
        </div>
        <div className='d-flex justify-content-center align-items-center '>
            <label className='p-2 m-2'>Search</label>
            <input onKeyUp={handleInput} type='search' placeholder='search........' className='form-control w-50 p-2 m-2'/>
        </div>
        <div className='d-flex flex-column justify-content-center align-content-center text-center '> 
        {!fetchedData.length &&<Rings center type="puff" color="#00BFFF" height={100} width={100}/>}
            <ul  className='list-unstyled d-flex flex-column justify-content-center align-items-center'>
                {fetchedData.map((eachItem,index)=><CardWiki eachItem={eachItem} key={index}/>)}
            </ul>
        </div>
    </div>
  )
}

export default WikiApp