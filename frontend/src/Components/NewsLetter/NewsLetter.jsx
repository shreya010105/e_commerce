import React from 'react'
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exculsive Offers On Your Email</h1>
        <p>Subscribe to our newLetter and stay updated</p>
        <div>
            <input 
            type="email" 
            placeholder='abc@gmail.com'
             />
             <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter