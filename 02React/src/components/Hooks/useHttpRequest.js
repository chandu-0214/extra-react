import { useEffect, useState } from "react"

const useHttpRequest = (url)=>{
    const [fetchedData, setfetchedData] = useState([])
    const [isLoading, setisLoading] = useState(false)
  
    useEffect(() => {
        // side effects
        const fetchingTheData = (url)=>{
            fetch(url)
         .then((response)=>response.json())
         .then((data)=>{
            setfetchedData(data)
            setisLoading(true)
         })
         .catch((error)=>console.log(error,"error"))
         }
         fetchingTheData(url)

    },[])

    return [fetchedData,isLoading]

}
export default useHttpRequest;