import React, { useEffect, useState } from 'react'
import './Popular.css';
import Item from '../Item/Item';
const Popular = () => {
  const [popular,setPopular] = useState([]);

  useEffect(()=>{
    const fetchPopular = async() => {
      try{
        const response = await fetch('http://localhost:4000/popularInWomen');
        const data = await response.json();
        setPopular(data);
      }
      catch(e){
        console.log(e.message);
      }  
    }
    fetchPopular();
  },[])
  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-items">
            {popular.map((item)=>(
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

export default Popular