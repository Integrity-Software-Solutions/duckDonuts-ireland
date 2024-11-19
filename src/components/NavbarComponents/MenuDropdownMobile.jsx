import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const MenuDropdownMobile = (props) => {
  const [expandMenu, setExpandMenu] = useState(false);

  useEffect(() => {
    if (!props.mobileNavbarOpen) {
      setExpandMenu(false);
    }
  }, [props.mobileNavbarOpen]);
  return (
    <div
      className={`${
        props.mobileNavbarOpen ? "flex sm:hidden" : "hidden"
      } flex-col items-center sticky top-[4.5rem] left-0 w-full h-screen z-30 overflow-hidden -mt[4.5rem] bg-gradient-to-b from-sky-500 via-sky-400 to-sky-500 text-white p-2 font-bold`}
    >
      <ul className="w-full">
        <Link to="/">
          <li className="py-2 border-b-[1px] border-b-white border-opacity-50">
            <p
              className="w-min"
              onClick={() => {
                props.setMobileNavbarOpen(false);
              }}
            >
              home
            </p>
          </li>
        </Link>
        <li className="py-2 border-b-[1px] border-b-white border-opacity-50 flex justify-between items-center">
          <Link to="/menu">
            <p
              className="w-min z-10"
              onClick={() => {
                props.setMobileNavbarOpen(false);
              }}
            >
              menu
            </p>
          </Link>
          <FontAwesomeIcon
            icon={expandMenu ? faMinus : faPlus}
            size="xl"
            className={`mr-2 cursor-pointer transition ease-in-out duration-1000 z-20`}
            onClick={() => {
              setExpandMenu((prev) => !prev);
            }}
          />
        </li>

        <div
          className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
            expandMenu ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <ul className="w-full">
            <Link to="/menu/seasonal">
              <li className="py-2 pl-10 border-b-[1px] border-b-white border-opacity-50">
                <p
                  className="w-min text-nowrap"
                  onClick={() => {
                    props.setMobileNavbarOpen(false);
                  }}
                >
                  seasonal
                </p>
              </li>
            </Link>
            <Link to="/menu/fan-favorites">
              <li className="py-2 pl-10 border-b-[1px] border-b-white border-opacity-50">
                <p
                  className="w-min text-nowrap"
                  onClick={() => {
                    props.setMobileNavbarOpen(false);
                  }}
                >
                  fan favorites
                </p>
              </li>
            </Link>
            <Link to="/menu/everyday-assortments">
              <li className="py-2 pl-10 border-b-[1px] border-b-white border-opacity-50">
                <p
                  className="w-min text-nowrap"
                  onClick={() => {
                    props.setMobileNavbarOpen(false);
                  }}
                >
                  everyday assortments
                </p>
              </li>
            </Link>
            <Link to="/menu/coffee-espresso-more">
              <li className="py-2 pl-10 border-b-[1px] border-b-white border-opacity-50">
                <p
                  className="w-min text-nowrap"
                  onClick={() => {
                    props.setMobileNavbarOpen(false);
                  }}
                >
                  coffee, espresso & more
                </p>
              </li>
            </Link>
            <Link to="/menu/ice-cream">
              <li className="py-2 pl-10 border-b-[1px] border-b-white border-opacity-50">
                <p
                  className="w-min text-nowrap"
                  onClick={() => {
                    props.setMobileNavbarOpen(false);
                  }}
                >
                  ice cream
                </p>
              </li>
            </Link>
            <Link to="/menu/lemonade-refreshers">
              <li className="py-2 pl-10 border-b-[1px] border-b-white border-opacity-50">
                <p
                  className="w-min text-nowrap"
                  onClick={() => {
                    props.setMobileNavbarOpen(false);
                  }}
                >
                  lemonade & refreshers
                </p>
              </li>
            </Link>
            <Link to="/menu/sandwiches">
              <li className="py-2 pl-10 border-b-[1px] border-b-white border-opacity-50">
                <p
                  className="w-min text-nowrap"
                  onClick={() => {
                    props.setMobileNavbarOpen(false);
                  }}
                >
                  sandwiches
                </p>
              </li>
            </Link>
            <Link to="/menu/made-to-order-donuts">
              <li className="py-2 pl-10 border-b-[1px] border-b-white border-opacity-50">
                <p
                  className="w-min text-nowrap"
                  onClick={() => {
                    props.setMobileNavbarOpen(false);
                  }}
                >
                  made-to-order donuts
                </p>
              </li>
            </Link>
          </ul>
        </div>
        <Link to="/contact-us">
          <li className="py-2 border-b-[1px] border-b-white border-opacity-50">
            <p
              className="w-min text-nowrap"
              onClick={() => {
                props.setMobileNavbarOpen(false);
              }}
            >
              contact us
            </p>
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
