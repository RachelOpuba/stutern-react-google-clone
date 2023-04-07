import React from "react";
import green from "../assets/images/green-leaf.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="country">
            <p>Nigeria</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <a href="#">About</a>
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search works</a>
          </div>
          <div className="footer-center">
            <a href="#">
              <img src={green} alt="green leaf" />
              <span>Carbon neutral since 2007</span>
            </a>
          </div>
          <div className="footer-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
