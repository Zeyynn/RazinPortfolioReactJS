import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'

const Contact = () => {                                 //API for email notification

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e7e096b5-89ad-469c-8a2e-a7c3116915be");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">                 {/*Title*/}
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">               {/*Contents for Contact*/}
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Currently searching for internship. You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>razinhariz@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>No 2/2526 Jalan Darat Makbar 25100 Kuantan</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" /> <p>+6013-939-0341</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">              {/*Form for Submission*/}
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <label htmlFor="">Message</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
        </form>
        </div>
    </div>
  )
}

export default Contact