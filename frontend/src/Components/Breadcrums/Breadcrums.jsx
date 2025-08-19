import React from 'react'
import './Breadcrums.css';
import arrow from '../Assets/arrow-icon.png'
const Breadcrums = ({product}) => {
  const category = product?.category || 'unknown';
  const name = product?.name || 'Unnamed Product';
  return (
    <div className='breadcrums'> 
        HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" />
        {category} <img src={arrow} alt="" /> {name}
    </div>
  )
}

export default Breadcrums