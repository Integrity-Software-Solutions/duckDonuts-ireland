import React from "react";
import { Link } from "react-router-dom";

const MenuDropdown = (props) => {
  const menuCategories = [
    {category: "seasonal", endpoint: "seasonal"},
    {category: "fan favorites", endpoint: "fan-favorites"},
    {category: "everyday assortments" , endpoint: "everyday-assortments"},
    {category: "coffee, espresso, & more", endpoint: "coffee-espresso-more"},
    {category: "ice cream", endpoint: "ice-cream"},
    {category: "lemonade & refreshers", endpoint: "lemonade-refreshers"},
    {category: "sandwiches", endpoint: "sandwiches"},
    {category: "made-to-order donuts", endpoint: "made-to-order-donuts"},
  ];
  return (
    <>
      <div
        className={`${
          props.hovered === "menu"
            ? "transition-all ease-in-out duration-700 absolute bottom-0 left-0 w-auto h-1 bg-black opacity-5 rounded-sm min-w-[16em]"
            : "opacity-0"
        }`}
      ></div>

      {/* Main dropdown content */}
      <div
        className={`transition-all ease-in-out duration-500 absolute top-[4.2rem] left-0 w-auto bg-sky-500 shadow-2xl px-6 py-4 min-w-[16em] space-y-2 ${
          props.hovered === "menu"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-0"
        }`}
      >
        {menuCategories.map((category, index) => (
          <Link to={`menu/${category.endpoint}`} key={index}>
            <p className="text-white py-1 hover:cursor-pointer hover:border-b-[3.5px] hover:border-b-white">
              {category.category}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MenuDropdown;
