import React from 'react'
import './Title.css'

const Title = ({subtTitle, title}) => {
  return (
    <div className='title'>
        <p>{subtTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title
