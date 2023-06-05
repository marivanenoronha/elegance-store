import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

function Footer() {
  return (
    <footer>
      <div className='sociais'>
        <div className='social'>
          <FaInstagram />
        </div>
        <div className='social'>
          <FaFacebook />
        </div>
        <div className='social'>
          <CgMail />
        </div>
      </div>
      <div className='store'>
        <p><span>EleganceStore</span> &copy; 2023</p>
      </div>
    </footer>
  )
}

export default Footer