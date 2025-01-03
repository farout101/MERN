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

            <ul>
                <li>
                    <h3>2 nights to chaung tha</h3>
                    <p>price - 100,000 mmk</p>
                </li>
            </ul>
        </div>
    )
}
