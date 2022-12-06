import React, { useState } from 'react';

import { images } from '../../constants';
import { Appwrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // eslint-disable-next-line 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
     // eslint-disable-next-line 
    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    // client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Do you want to contact me?</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="lakshminirmalakadali6@gmail.com" className="p-text">lakshminirmalakadali6@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.git} alt="git" />
          <a href="https://github.com/Nirmalakadali" className="p-text">Nirmalakadali</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Thankyou we will get into touch once i will implement backend'}</button>
         
        </div>
        
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
          
        </div>
        
      )}
       <div className='copyright'>
                <p className='p-text'>since 2022@Nirmala</p>
                <p className='p-text'>All rights reserved</p>
            </div>
    </>
  );
};

export default Appwrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
