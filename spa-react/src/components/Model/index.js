import React from 'react'
import './index.css'

export default function Model({children}) {
  return (
    <div className='model-backdrop'>
        <div className='model'>
          {children}
        </div>
    </div>
  )
}