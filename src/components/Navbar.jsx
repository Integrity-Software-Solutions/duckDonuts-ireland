import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderOnlineButton from "./NavbarComponents/OrderOnlineButton";
import DuckDonutsLogo from "../assets/images/NavbarImages/DuckDonutsLogo.png";
import MenuDropdown from "./NavbarComponents/MenuDropdown";

const Navbar = () => {
  const [hovered, setHovered] = useState("");

  const handleHover = (option) => {
    setHovered(option);
  };

  return (
    <div className="navbar w-full bg-sky-500 flex h-[6.46rem] sticky top-0 left-0">
      <Link to="/">
        <img
          src={DuckDonutsLogo}
          alt="Duck Donuts Logo"
          className="h-[4.7rem] absolute top-4 left-5 lg:left-[5.5rem] lg:h-[4.6rem]"
        />
      </Link>
      <div className="mr-8 h-[4.2rem] flex-1 self-end text-white font-bold">
        <div className="flex justify-end h-full pr-3 space-x-3">
          {/* Home */}
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
              className={`py-1 border-b-[3.5px] transition-all ease-in-out duration-700 ${
                hovered === "home" ? "border-b-white" : "border-b-transparent"
              }`}
            >
              home
            </p>
          </div>
          {/* Menu */}
          <div
            className="h-full p-1 hover:cursor-pointer relative"
            onMouseEnter={() => {
              handleHover("menu");
            }}
            onMouseLeave={() => {
              handleHover("");
            }}
          >
            <p
              className={`py-1 border-b-[3.5px] transition-all ease-in-out duration-700 ${
                hovered === "menu" ? "border-b-white" : "border-b-transparent"
              }`}
            >
              menu
            </p>
            <MenuDropdown hovered={hovered} />
          </div>
        </div>
      </div>
      <OrderOnlineButton />
    </div>
  );
};

export default Navbar;
