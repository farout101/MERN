import React, { useEffect, useState } from 'react'

export default function Index() {

    let [trips, setTrips] = useState([])

    let [url,setUrl] = useState('http://localhost:3000/trips/')

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTrips (data)
        })
    },[url])

    return (
        <div>
            <h1>Ready to Go?</h1>

            <button onClick={() => setUrl('http://localhost:3000/trips/')}>All</button>
            <button onClick={() => setUrl('http://localhost:3000/trips/?location=Myanmar')}>Filter by Myanmar</button>

            <ul>
                {trips.map(trip => (
                <li key={trip.id}>
                    <h3>{trip.name}</h3>
                    <p>price - {trip.price}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}
