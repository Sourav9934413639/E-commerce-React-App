import React from 'react'
import './styles/Item.css'
const Item = ({title,desc,price,image}) => {
  return (
    <div className='item'>
      <img src={image} alt={title} />
      <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <h3>${price}</h3>
      </div>
    </div>
  )
}

export default Item
