// import React from "react";
import dots from "../assets/images/dots-img.png";
import profile from "../assets/images/profile.jpeg";
import "../Styles.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <span className="header-text">Gmail</span>
        <span className="header-text">Images</span>
        <div className="dots">
          <img src={dots} alt="nine dots" className="dot" />
        </div>
        <div className="profile-holder">
          <img src={profile} alt="profile" className="profile" />
        </div>
      </div>
    </>
  );
};

export default Header;
