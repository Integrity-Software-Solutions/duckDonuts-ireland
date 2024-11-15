import React, { useState } from "react";

const MenuToggle = (props) => {
  const [isChanged, setIsChanged] = useState(false);

  const handleClick = () => {
    setIsChanged((prev) => !prev);
    props.setMobileNavbarOpen((prev) => !prev);
  };
  return (
    <div
      className={`container ${
        isChanged ? "change" : ""
      } inline-block cursor-pointer w-auto`}
      onClick={handleClick}
    >
      <div
        className="bar1"
        style={{
          width: "35px",
          height: "5px",
          backgroundColor: "white",
          margin: "6px 0",
          transition: "0.4s",
          transform: isChanged ? "translateY(11px) rotate(-135deg)" : "none",
        }}
      ></div>
      <div
        className="bar2"
        style={{
          width: "35px",
          height: "5px",
          backgroundColor: "white",
          margin: "6px 0",
          transition: "0.4s",
          opacity: isChanged ? 0 : 1,
        }}
      ></div>
      <div
        className="bar3"
        style={{
          width: "35px",
          height: "5px",
          backgroundColor: "white",
          margin: "6px 0",
          transition: "0.4s",
          transform: isChanged ? "translateY(-11px) rotate(135deg)" : "none",
        }}
      ></div>
    </div>
  );
};

export default MenuToggle;
