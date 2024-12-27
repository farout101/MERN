import React, { useState } from 'react'

export default function App() {

  let [count,setCount] = useState(0)

  let increment = () => {
    setCount((prevState)=>prevState+1)
    setCount((prevState)=>prevState+1)
    setCount((prevState)=>prevState+1)
    setCount((prevState)=>prevState+1)
  }

  return (
    <div>
      <h3>Counter</h3>
      <h3>Count - {count}</h3>
      <button onClick={increment}>increment</button>
    </div>
  )
}