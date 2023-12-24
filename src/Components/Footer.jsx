// Footer.jsx



import SunstarJannahMarketingLogo from "../assets/Sunstar-Beverages-Jannah-Marketing-Logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from "react-router-dom";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="georgios-footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Your company logo or name */}
          <img src={SunstarJannahMarketingLogo} alt="Sunstar Beverages | Jannah Marketing Logo " />
         
        </div>
        <div className="footer-links">
          <NavLink to="/">Home</NavLink>
         
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="footer-social">
          {/* Use react-icons for social medi<NavLink icons */}
          <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></NavLink>
          <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></NavLink>
          <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></NavLink>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="company-description">
          {/* <p>
            we strive to provide you with the best and most refreshing beverages.
            Explore our diverse range of flavors and experience <NavLink world of taste like never before.
          </p> */}
        </div>
        
        <p className="last-text">&copy; {currentYear} Jannah Marketing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
