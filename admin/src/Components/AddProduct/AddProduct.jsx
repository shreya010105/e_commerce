import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
const AddProduct = () => {
  const[image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:""
  })
  const changeHandler = (e) => {
    setProductDetails({...productDetails,[e.target.name] : e.target.value})
  }

  const Add_product = async() => {  // sending data to backend
    console.log(productDetails);
    let response;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',
      {
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data)=>{response=data})

    if(response.success){
      product.image = response.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addProduct',
        {
          method:'POST',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(product),
        })
        .then((resp)=>resp.json())
        .then((data)=>{
          data.success?alert("Product Added"):alert("Failed")
        })
      
    }
  }
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text"
        value={productDetails.name}
        onChange={changeHandler} 
        name='name' 
        placeholder='Type Here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text"
          value={productDetails.old_price}
          onChange={changeHandler} 
          name='old_price' 
          placeholder='Enter price'/>
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text"
          value={productDetails.new_price}
          onChange={changeHandler} 
          name='new_price' 
          placeholder='Enter price'/>
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select name="category" value={productDetails.category} onChange={changeHandler} className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className='addproduct-itemfield'>
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />
        </label>
        <input type="file"
        onChange={(e) => setImage(e.target.files[0])} 
        name="image" 
        id="file-input" 
        hidden/>
      </div>
      <button className='addproduct-btn' onClick={()=>{Add_product()}}>ADD</button>
    </div>
  )
}

export default AddProduct