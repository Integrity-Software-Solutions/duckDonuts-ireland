import React from "react";

const MenuDropdown = (props) => {
  const menuCategories = [
    "seasonal",
    "fan favorites",
    "everyday assortments",
    "coffee, espresso, & more",
    "ice cream",
    "lemonade & refreshers",
    "sandwiches",
    "made-to-order donuts",
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
          <p
            key={index}
            className="text-white py-1 hover:cursor-pointer hover:border-b-[3.5px] hover:border-b-white"
          >
            {category}
          </p>
        ))}
      </div>
    </>
  );
};

export default MenuDropdown;
