import React from 'react'
import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className='RelatedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-items">
            {data_product.map((item)=>(
                <Item 
                id={item.id} 
                name ={item.name}
                image = {item.image}
                new_price = {item.new_price}
                old_price = {item.old_price}
                category = {item.category}
                />
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts