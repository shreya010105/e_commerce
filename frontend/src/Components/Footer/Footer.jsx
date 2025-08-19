import React from 'react'
import './Footer.css';
import insta from '../Assets/insta_icon.png'
import whats from '../Assets/whats-icon.png'
import print from '../Assets/print-icon.png'
import logo from '../Assets/logoo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whats} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={print} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer