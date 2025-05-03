import { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  return (
    <div className="navbar">
      {/* Mobile menu button - only visible on small screens */}
      <div className="nav-mob-open" onClick={toggleMobileMenu}>
        {/* Hamburger icon - you can use an SVG or icon library */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Logo or brand name can go here */}
      <div className="nav-logo">
        {/* Your logo or brand text */}
      </div>

      {/* Navigation menu */}
      <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
        {/* Close button for mobile menu - only visible when menu is open */}
        <div className="nav-mob-close" onClick={toggleMobileMenu}>
          {/* X icon for closing */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <li>
          <AnchorLink 
            offset={50}
            href="#home"
            className={`anchor-link ${menu === "home" ? "active" : ""}`}
            onClick={() => handleMenuClick("home")}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            offset={50}
            href="#about"
            className={`anchor-link ${menu === "about" ? "active" : ""}`}
            onClick={() => handleMenuClick("about")}
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            offset={50}
            href="#services"
            className={`anchor-link ${menu === "services" ? "active" : ""}`}
            onClick={() => handleMenuClick("services")}
          >
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            offset={50}
            href="#work"
            className={`anchor-link ${menu === "mywork" ? "active" : ""}`}
            onClick={() => handleMenuClick("mywork")}
          >
            My Work
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            offset={50}
            href="#contact"
            className={`anchor-link ${menu === "contact" ? "active" : ""}`}
            onClick={() => handleMenuClick("contact")}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      
      <div className="nav-connect">
        <AnchorLink
          className={`anchor-link ${menu === "contact" ? "active" : ""}`}
          offset={50}
          href="#contact"
        >
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;