import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We provide a wide range of services, including loans, construction, 
            and rentals. Our goal is to make property ownership and management easy.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@companyname.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 , City, Country</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
