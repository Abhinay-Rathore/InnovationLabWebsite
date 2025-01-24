import React from "react";
import {Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* <img src={iarLogo} alt="IAR CELL" className="footer-logo" /> */}
          <h3>CSquare</h3>
          <p className="address">type here</p>
          <Link to="/admin_login_page">Admin Login</Link>
        </div>
        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><a href="http://www.google.com/url?q=http%3A%2F%2F192.168.1.35%3A83%2F&sa=D&sntz=1&usg=AOvVaw0fgcL6LK3grR-Zi0LNM8FO">Online Job Request</a></li>
            {/* <li><a href="#">twitter</a></li> */}
            <li>
              <a href="mailto:csquare@iitpkd.ac.in">csquare@iitpkd.ac.in</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p className="address">Indian Institute of Technology Palakkad,</p>
          <p className="address"> Nila Campus, Kanjikode West P.O,</p>
          <p className="address"> Palakkad, Kerala, </p>
          <p className="address">Pincode: 678623</p>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright ©2024 Indian Institute of Technology Palakkad. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
