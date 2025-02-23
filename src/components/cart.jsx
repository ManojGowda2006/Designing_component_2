import React from 'react'
import Button from './button'

function cart({ props }) {
  return (
    <div className='card'>
      <img src={props.pImg} alt="User" />
      <h3>{props.pName}</h3>
      <p>price: {props.price}</p>
      <Button/>
    </div>
  )
}

export default cart
