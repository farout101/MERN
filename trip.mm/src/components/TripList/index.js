import React, { useEffect, useState } from 'react'

export default function Index() {

    let [trips, setTrips] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/trips')
        .then(res => res.json())
        .then(data => {
            setTrips (data)
        })
    },[])

    return (
        <div>
            <h1>Ready to Go?</h1>

            <button>All</button>
            <button>Filter by location</button>

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
