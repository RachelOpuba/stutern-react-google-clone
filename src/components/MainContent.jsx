import React from "react";
import logo from "../assets/images/google-logo.png";
import searchIcon from "../assets/images/search-icon.png";
import voiceIcon from "../assets/images/google-voice-icon.png";
import lens from "../assets/images/google-lens.jpg";
import Icon from "./Icon";
import Button from "../Button";

const MainContent = (props) => {
  return (
    <>
      <div className="main-content-container">
        <img src={logo} alt="google logo" className="logo" />
        <div className="input-container">
          <div className="left-icon">
            <Icon img={searchIcon} />
          </div>
          <div className="input">
            <input type="text" />
          </div>
          <div className="right-icon">
            <Icon img={voiceIcon} />
            <Icon img={lens} />
          </div>
        </div>
        <div className="main-buttons">
          <Button text={"Google Search"} />
          <Button text={"I'm Feeling Lucky"} />
        </div>
        <div className="languages">
          <span className="lang">Google offered in :</span>
          <a href="#">Hausa</a>
          <a href="#">Igbo</a>
          <a href="#">Èdè Yorùbá</a>
          <a href="#">Nigerian Pidgin</a>
        </div>
      </div>
    </>
  );
};

export default MainContent;
