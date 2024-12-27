import React from 'react'
import './index.css'

export default function Model({children,setShowModel}) {
  return (
    <div className='model-backdrop'>
        <div className='model'>
          {children}
          <button onClick={() => setShowModel(false)}>Close</button>
        </div>
    </div>
  )
}