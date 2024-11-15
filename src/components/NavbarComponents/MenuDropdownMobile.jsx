import React from "react";
import { Link } from "react-router-dom";

const MenuDropdownMobile = (props) => {
  return (
    <div className={`${props.mobileNavbarOpen ? "flex sm:hidden" : "hidden"} flex-col items-center sticky top-[4.5rem] left-0 w-full h-screen z-30 overflow-hidden -mt[4.5rem] bg-gradient-to-b from-sky-500 via-sky-400 to-sky-500 text-white p-2 font-bold`}>
      <ul className="w-full">
        <Link to="/">
          <li className="py-2 border-b-[1px] border-b-white border-opacity-50">
            home
          </li>
        </Link>
        <Link to="/menu">
          <li className="py-2 border-b-[1px] border-b-white border-opacity-50">
            menu
          </li>
        </Link>
        <Link to="/">
          <li className="py-2 border-b-[1px] border-b-white border-opacity-50">
            contact us
          </li>
        </Link>
      </ul>
      <button className="text-lg bg-[#E6427A] py-2 px-7 mt-7 rounded-full shadow-xl">
        Order Online!
      </button>
    </div>
  );
};

export default MenuDropdownMobile;
