import React from "react";
import "../styles/footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* <img src={iarLogo} alt="IAR CELL" className="footer-logo" /> */}
          <h3>CSquare</h3>
          <p className="address">type here</p>
        </div>
        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            {/* <li><a href="#">facebook-f</a></li> */}
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

export default footer;
