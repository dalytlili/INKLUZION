import React from 'react';
import timelessLogo from '../assets/timelessLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.25] justify-center items-center">
        <img src={timelessLogo} alt="logo" className="w-32" />
      </div>
      
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <FontAwesomeIcon icon={faFacebook} />
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <FontAwesomeIcon icon={faInstagram} />
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <FontAwesomeIcon icon={faTimes} />
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <FontAwesomeIcon icon={faYoutube} />
        </p>
      </div>

      <div className="flex flex-[0.25] justify-center items-center">
        <p className="text-white text-right text-xs">
          &copy;2024 All rights reserved
        </p>
      </div>
    </div>
  </div>
)

export default Footer;
