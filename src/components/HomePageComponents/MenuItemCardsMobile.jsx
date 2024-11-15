import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MenuItemCardsMobile = (props) => {
  return (
    <div
      className="flex flex-row items-center pl-1 pr-5 py-2 justify-between uppercase font-bold text-sky-500 text-xl rounded-2xl"
      style={{ boxShadow: "0 0 6px 3px rgba(0, 0, 0, 0.1)" }}
    >
      <img
        src={props.image}
        alt={props.cardTitle}
        className="w-20 h-20 justify-self-start"
      />
      <p className="text-lg flex items-center justify-center text-center h-20 w-1/2">
        {props.cardTitle}
      </p>
      <button className="w-10 h-10 rounded-full bg-[rgb(73,164,154)] text-white justify-self-end">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default MenuItemCardsMobile;
