import React from "react";
import logo1 from '../assets/logo-1.png';
import { Link } from 'react-router-dom'
import "./Footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
         <Link to="/"><img src={logo1} alt="Logo" /> </Link>
          <div className="contact-section">
           <Link className='Contact-link'  to={'/contact'} >Contact Us</Link>
            <p>Email: Lovekumar161129@gamil.com</p>
            <p>Phone: +91 9654662096</p>
            <p>
            Address: B Block, 169/2, Lal Kuan <br />
            Chungi No. 2, New Delhi - 110044

            </p>
          </div>
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <Link   to={'/about'} >About</Link>
          <Link   to={'/contact'} >Contact</Link>
          <Link  to={'/blog'} >Blog</Link>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-box">
            <input type="email" placeholder="Email" />
            <button>Subscribe to news</button>
          </div>
          <div className="social-iconsss">
            <a href="https://www.linkedin.com/in/love-kumar965466?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
            <a href="https://www.facebook.com/share/18r2AQBjjz/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/love_kumar9654?igsh=b2tydjFwdmVtNGcz"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
      <p>© {new Date().getFullYear()} <strong>SMIP</strong> — All rights reserved.</p>

        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
