import React from "react";

const Icon = (props) => {
  return (
    <>
      <img src={props.img} alt="" className={props.class} />
    </>
  );
};

export default Icon;
