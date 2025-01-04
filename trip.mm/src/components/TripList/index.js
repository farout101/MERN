import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './index.css'

export default function Index() {

    // let [trips,setTrips] = useState([])

    let [url,setUrl] = useState('http://localhost:3000/trips/')

    // let fetchTrips = useCallback(() => { //Stores a function as cache
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         setTrips (data)
    //     })
    // },[url])

    let { data : trips, loading, error } = useFetch(url)

    return (
        <div className='container'>
            <div className='flex-container'>
                {error && <p>{error}</p>}

                {!error && <div>
                    <h1>Ready to Go?</h1>
                
                    <div>
                        <button onClick={() => setUrl('http://localhost:3000/trips/')}>All</button>
                        <button onClick={() => setUrl('http://localhost:3000/trips/?location=Myanmar')}>Filter by Myanmar</button>
                    </div>

                    {loading && <p>Lists are still Loading</p>}

                    <ul className='trips-list'>
                        {trips && trips.map(trip => ( // Data fetching takes time so we need a placeholder or wait it until it's done
                        <li className='trip' key={trip.id}>
                            <h3>{trip.name}</h3>
                            <p>price - {trip.price}</p>
                        </li>
                        ))}
                    </ul>     
                </div>}
            </div>
        </div>
    )
}