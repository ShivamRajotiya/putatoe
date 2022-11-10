import React from "react";
import { FaFacebookF } from "react-icons/fa";
import logo2 from "../icons/logo2.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./header.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div className="p-logo">
            <img className="logo-2" src={logo2} alt="" />
          </div>
          <div className="about">
            <h2>PUTATOE SOLUTIONS PVT. LTD.</h2>
            <h4>
              233 Harahawa Phatak,Near SBI Bank,Gorakhpur,Uttar Pradesh-273001
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Useful Links</h4>
          <p>About us</p>
          <p>Contact Us</p>
          <p>Terms and Condition</p>
          <div className="links">
            <div className="new-icons">
              <FaFacebookF />
            </div>
            <div className="new-icons">
              <FaInstagram />
            </div>
            <div className="new-icons">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
