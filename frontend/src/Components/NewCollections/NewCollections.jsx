import React, { useEffect, useState } from 'react'
import './NewCollections.css';
import Item from '../Item/Item';


const NewCollections = () => {
  const [new_collections,setNew_Collections] = useState([]);
  useEffect(()=>{
    const fetchNewCollections = async() => {
      try{
        const response = await fetch('https://ecommerce-zizq.onrender.com/newCollections');
        const data = await response.json();
        setNew_Collections(data);
      }
      catch(e){
        console.log(e.message);
      }
    }
    fetchNewCollections();
  },[])
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item)=>(
                <Item 
                id={item.id} 
                name ={item.name}
                image = {item.image}
                new_price = {item.new_price}
                old_price = {item.old_price}
                />
            ))}
        </div>
    </div>
  )
}

export default NewCollections