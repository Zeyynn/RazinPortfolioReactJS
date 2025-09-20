import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'

const Footer = () => {
  return (
    <div className="footer">                                    {/*Main foooter*/}
        <div className="footer-top">                            {/*Top foooter*/}
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p></p>
            </div>
            <div className="footer-top-right">
            </div>
        </div>
        <hr />
        <div className="footer-bottom">                         {/*Bottom foooter*/}
            <p className="footer-bottom-left"></p>
            <div className="footer-bottom-right">
            </div>
        </div>
    </div>
  )
}

export default Footer