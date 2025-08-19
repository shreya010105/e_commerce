import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import decrease from '../Assets/decrease_icon.png'
import remove from '../Assets/remove_icon.png'
const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product
  .filter((item) => cartItems[item.id] > 0)
  .map((item) => (
    <div key={item.id}>
      <div className="cartitems-format cartitems-format-main">
        <img className="cart-icon-product" src={item.image} alt="" />
        <p>{item.name}</p>
        <p>${item.new_price}</p>
        <button className="cartitems-quantity">{cartItems[item.id]}</button>
        <p>${item.new_price * cartItems[item.id]}</p>
        <img className='image'
          src={remove}
          onClick={() => removeFromCart(item.id)}
        />
      </div>
      <hr />
    </div>
))}
<div className="cartitems-down">
    <div className="cartitems-total">
        <h1>Cart Totals</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cartitems-promocode">
        <p>If you have promo code, Enter it here</p>
        <div className="cartitems-promo-box">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default CartItems