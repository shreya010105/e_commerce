import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {
  const [allproducts,setAllProducts] = useState([]);


  useEffect(()=>{
    const fetchInfo = async() => {
    await fetch('http://localhost:4000/allProducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }
  fetchInfo();
  },[])

  const remove_product = async(id) => {
    await fetch('http://localhost:4000/removeProduct',{
      method:'POST',
      headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
      
    })
     const res = await fetch('http://localhost:4000/allProducts');
     const data = await res.json();
     setAllProducts(data);
  }
  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {
  allproducts.map((prod) => (
    <div key={prod.id}>
      <div className="listproduct-format-main listproduct-format">
        <img src={prod.image} alt="" className="listproduct-product-icon" />
        <p>{prod.name}</p>
        <p>${prod.old_price}</p>
        <p>${prod.new_price}</p>
        <p>{prod.category}</p>
        <img onClick={() => remove_product(prod.id)} src={cross_icon} className="listproduct-remove-icon" />
      </div>
      <hr />
    </div>
  ))
}
      </div>
    </div>
  )
}  

export default ListProduct