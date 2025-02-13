import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'

const Footer = () => {
  return (
    <div className="footer">                                    {/*Main foooter*/}
        <div className="footer-top">                            {/*Top foooter*/}
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>A student interning at Trigon Tech</p>
            </div>
            <div className="footer-top-right">
            </div>
        </div>
        <hr />
        <div className="footer-bottom">                         {/*Bottom foooter*/}
            <p className="footer-bottom-left">© 2025 Hariz Razin. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Footer