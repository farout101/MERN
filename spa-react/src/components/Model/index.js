import React from 'react'
import './index.css'

export default function Model({children,setShowModel,Danger}) {

  let ownClass = Danger ? 'border-red' : 'border-blue'

  return (
    <div className='model-component'>
      <div className='model-backdrop'>
        <div className={`model ${ownClass}`}>
          {children}
          <button onClick={() => setShowModel(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}