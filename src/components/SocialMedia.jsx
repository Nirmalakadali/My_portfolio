import React from 'react'
import {BsTwitter,BsInstagram, BsGithub} from 'react-icons/bs'
import { FaFacebookF,FaTelegram} from 'react-icons/fa';
const SocialMedia = () => {
  return (
   <div className="app__social">
    <div>
       <a href="https://twitter.com/nirmala_kadali">< BsTwitter/></a>
    </div>
    <div>
        <a href=""><FaFacebookF/></a>
    </div>
    <div>
        <a href="https://www.instagram.com/its_mee_i/"><BsInstagram/></a>
    </div>
    <div>
       <a href="https://github.com/Nirmalakadali">  <BsGithub/></a>
    </div>
     <div>
       <a href="https://web.telegram.org/k/"><FaTelegram/></a> 
    </div>
   </div>
  )
}

export default SocialMedia