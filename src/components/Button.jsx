import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="main-btn">{props.text}</button>
    </>
  );
};

export default Button;
