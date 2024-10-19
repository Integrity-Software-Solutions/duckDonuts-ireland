import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderOnlineButton from "./NavbarComponents/OrderOnlineButton";
import DuckDonutsLogo from "../assets/images/NavbarImages/DuckDonutsLogo.png";

const Navbar = () => {
  const [hovered, setHovered] = useState("");

  const handleHover = (option) => {
    setHovered(option);
  };

  return (
    <div className="navbar w-full bg-sky-500 flex h-[6.46rem] relative">
      <Link to="/">
        <img
          src={DuckDonutsLogo}
          alt="Duck Donuts Logo"
          className="h-[4.7rem] absolute top-4 left-5"
        />
      </Link>
      <div className="mr-8 h-[4.2rem] flex-1 self-end text-white font-bold">
        <div className="flex justify-end h-full pr-3 space-x-3">
          <div
            className="h-full p-1 hover:cursor-pointer"
            onMouseEnter={() => {
              handleHover("home");
            }}
            onMouseLeave={() => {
              handleHover("");
            }}
          >
            <p
              className={`${
                hovered === "home" ? "border-b-white border-b-[3px]" : ""
              } py-1`}
            >
              home
            </p>
          </div>
          <div
            className="h-full p-1 hover:cursor-pointer"
            onMouseEnter={() => {
              handleHover("menu");
            }}
            onMouseLeave={() => {
              handleHover("");
            }}
          >
            <p
              className={`${
                hovered === "menu" ? "border-b-white border-b-[3px]" : ""
              } py-1`}
            >
              menu
            </p>
          </div>
        </div>
      </div>
      <OrderOnlineButton />
    </div>
  );
};

export default Navbar;
