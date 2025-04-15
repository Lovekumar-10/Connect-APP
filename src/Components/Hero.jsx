import React from 'react';
import { Link } from 'react-router-dom';
import heroimg from '../assets/side.webp';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className='hero-left-1'>
        <h1>
          All your Social Media. 
          One Powerful 
          Connection.
         </h1>
        <p>
            Stay organized, stay connected, and keep up with <br />
            the world--manage messages, notifications, and <br />
            chats from all platforms seamlessly
          </p>
        </div>
        <button className='hero-link-btn'>
          <Link to={'/signup'}>Get Started</Link>
        </button>
        
      </div>
      <div className="hero-right">
        <img
          src={heroimg}
          alt="Heroimage"
        />
      </div>
    </div>
  );
};

export default Hero;
