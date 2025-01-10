import { useEffect, useRef, useState } from "react"

function useFetch(url, _option)  {

    let [data,setData] = useState(null)
    let [loading,setLoading] = useState(false)
    let [error,setError] = useState(false)
    let option = useRef(_option).current.type

    useEffect(()=>{
        console.log(option)
        let abortController = new AbortController()
        let signal = abortController.signal

        setLoading(true)
        fetch(url, { signal })
        .then(res => {
            if(!res.ok){
                throw Error('something went wrong')
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setError(null)
            setLoading(false)
        })
        .catch(e => {
            setError(e.message)
        })

        //This line is for the cleanup purpose
        return () => {
            abortController.abort()
        }
    },[url, option])
    return {data, loading, error}
}

export default useFetch