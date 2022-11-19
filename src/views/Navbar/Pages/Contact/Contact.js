import React from 'react';
import Logo from '../Contact/Images/logo.png';
import '../Contact/Contact.css';

export default function Contact() {
  return (
    <div className='contact-container'>
      <img className='about-img' src={Logo} alt='about logo'></img>
      <p><a className='phone' href="tel:+91 1234567890"><svg className='phone-icon' stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#2196F3" d="M26.4,33.9c0,0,4-2.6,4.8-3c0.8-0.4,1.7-0.6,2.2-0.2c0.8,0.5,7.5,4.9,8.1,5.3c0.6,0.4,0.8,1.5,0.1,2.6 c-0.8,1.1-4.3,5.5-5.8,5.4c-1.5,0-8.4,0.4-20.3-11.4C3.6,20.7,4,13.8,4,12.3c0-1.5,4.3-5.1,5.4-5.8c1.1-0.8,2.2-0.5,2.6,0.1 c0.4,0.6,4.8,7.3,5.3,8.1c0.3,0.5,0.2,1.4-0.2,2.2c-0.4,0.8-3,4.8-3,4.8s0.7,2.8,5,7.2C23.5,33.2,26.4,33.9,26.4,33.9z"></path><g fill="#3F51B5"><path d="M35,9H25v4h10c1.1,0,2,0.9,2,2v10h4V15C41,11.7,38.3,9,35,9z"></path><polygon points="28,16 21.3,11 28,6"></polygon></g></svg></a>+91 1234567890</p>
      <p><a className='mail' href="mailto:someone@example.com"><svg className='mail-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"></path></svg>Send email</a></p>
    </div>
  )
}
