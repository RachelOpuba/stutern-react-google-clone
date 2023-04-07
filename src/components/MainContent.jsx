import React, { useState } from "react";
import logo from "../assets/images/google-logo.png";
import searchIcon from "../assets/images/search-icon.png";
import voiceIcon from "../assets/images/google-voice-icon.png";
import lens from "../assets/images/google-lens.jpg";
import Icon from "./Icon";
import Button from "./Button";

const MainContent = (props) => {
  const [keyword, setKeyword] = useState("");
  const [updated, setUpdated] = useState("");
  const handleInput = function (e) {
    let value = e.target.value;
    console.log(value);
    setKeyword(value);
  };

  const handleEnter = function (e) {
    if (e.key === "Enter") {
      setUpdated(keyword);
    }
  };
  return (
    <>
      <div className="main-content-container">
        <img src={logo} alt="google logo" className="logo" />
        <div className="input-container">
          <div className="left-icon">
            <Icon img={searchIcon} />
          </div>
          <div className="input">
            <input
              type="text"
              value={keyword}
              onChange={handleInput}
              onKeyDown={handleEnter}
            />
          </div>
          <div className="right-icon">
            <Icon img={voiceIcon} class={"voice-icon"} />
            <Icon img={lens} class={"lens-icon"} />
          </div>
        </div>
        <p className="message">{updated}</p>
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
