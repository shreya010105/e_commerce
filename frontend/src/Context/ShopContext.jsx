import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
        let cart = {};
        for(let i=0;i<300+1 ;i++){
            cart[i] = 0;
        }
        return cart;
    }

         //or
//   const getDefaultCart = () => {
//   let cart = {};
//   for (let item of all_product) {
//     cart[item.id] = 0;
//   }
//   return cart;
// };


const ShopContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(getDefaultCart)
    const [all_product,setAll_Product] = useState([]);


    useEffect(()=>{
        const fetchProduct = async() => {
            try{
                const response = await fetch('http://localhost:4000/allProducts');
                const data = await response.json();
                setAll_Product(data);
                if(localStorage.getItem('auth-token')){
                    fetch('http://localhost:4000/getcart',{
                        method:'POST',
                        headers:{
                            Accept:'application/form-data',
                            'auth-token' : `${localStorage.getItem('auth-token')}`,
                            'Content-Type':'application/json'
                        },
                        body:"",
                    })
                    .then((resp)=>resp.json())
                    .then((data)=>setCartItems(data))
                }
            }
            catch(e){
                console.log(e.message);
                
            }   
        }
        fetchProduct();
    },[])
const addToCart = (itemId) => {
  setCartItems((prev) => ({
    ...prev,
    [itemId]: prev[itemId] + 1
  }));
if(localStorage.getItem('auth-token')){
    fetch('http://localhost:4000/addtocart', {
  method: 'POST',
  headers: {
    Accept:'application/form-data',
    'auth-token':`${localStorage.getItem('auth-token')}`,
    'Content-Type':'application/json'
  },
  body: JSON.stringify({"itemId": itemId }),
})  
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
   else {
    console.log('No token found — please log in');
  }
}


     const removeFromCart = (itemId) => {
        setCartItems((prev) =>({
            ...prev,
            [itemId]:prev[itemId] - 1
        }) );
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token' ),
            },
            body: JSON.stringify({ itemId }),
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
          }
        }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount
    }
    const getTotalcartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalcartItems}

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>

       
    )
} 
export default ShopContextProvider;