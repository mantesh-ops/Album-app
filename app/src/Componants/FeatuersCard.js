import React from 'react'
import "./FeaturesCard.css"

function Featuers_card({ title, description, icon }) {
  return (
    <>
      <div className='card'>
        <div className='icon'>{icon}</div>
        <h2 className='title'>{title}</h2>
        <p className='description'>{description}</p>
      </div>
    </>
  )
}

export default Featuers_card