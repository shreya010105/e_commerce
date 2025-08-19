import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logoo.png'
import cart_icon from '../Assets/cart-icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_icon from '../Assets/nav-bar.png'
const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const {getTotalcartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const nav_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'> 
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <img className='nav_icon'onClick={nav_toggle}src={nav_icon} alt="" />
        <ul ref ={menuRef}className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==="mens"? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            {
            localStorage.getItem('auth-token')
            ?
            <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :
            <Link to='/login'><button>Login</button></Link>
            }
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalcartItems()}</div>
        </div>

    </div>
  )
}

export default Navbar