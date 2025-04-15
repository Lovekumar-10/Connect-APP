import React from 'react';
import '../Styles/AboutHero.css';
import teamImage from '../assets/myipc.png'; // Replace with your actual image
import Story from '../assets/story.png'; // Replace with your actual image
import Founder from './Founder.jsx';

const AboutHero = () => {
  return ( 

      <>
       <section className="about-hero">
      <div className="bg-shape top-left"></div>
      <div className="bg-shape bottom-right"></div>

      <h2 className="section-title">About Us</h2>

      <div className="about-content">
        <div className="mission-text">
          <h3 className="mission-title">Our Mission</h3>
          <div className="mission-lines">
            <span className="quote-start">“</span>
            <div className="line highlight">SMIP is an app that simplifies</div>
            <div className="line highlight">your social media usage by</div>
            <div className="line highlight">integrating all platforms in one.</div>
            <span className="quote-end">”</span>
          </div>
        </div>
        <div className="mission-image">
          <img src={teamImage} alt="Team" />
        </div>
      </div>
       </section>


    <section className="about-hero">
      <h2 className="section-title">Our Story</h2>
      <div className="about-content">
      <div className="mission-image">
          <img src={Story} alt="Team" />
        </div>
        <div className="mission-text">
          <h3 className="about-into">SMIP was founded in 2025 to transform the way people manage their digital presence across multiple social media platforms. Born out of the need to eliminate the clutter and chaos of app-hopping, SMIP empowers users with a unified space to chat, post, and monitor all activities effortlessly. With tools like the Smart Inbox, Unified Dashboard, and Notification Center, we aim to simplify online communication and create a seamless, stress-free digital life.</h3>
        </div>
      </div>
    </section>
    <Founder/>
  
  
      </>
    
  );
};

export default AboutHero;
