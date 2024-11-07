import React, { useState } from "react";
import MenuRolloverQuack from "/assets/images/HomePageImages/MenuRolloverQuack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MenuItemCards = (props) => {
  const [hovered, setHovered] = useState(false);
  console.log(props.link);
  return (
      <Link
        to={props.link}
        className={`${
          props.index < 4
            ? "h-[350px] w-64 relative flex justify-center pb-6"
            : "h-[350px] w-64 col-span-4 justify-self-center relative flex justify-center pb-6"
        } hover:cursor-pointer`}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {hovered && (
          <img
            className="absolute w-[8.45rem] z-10 left-[70%] top-[-1rem]"
            src={MenuRolloverQuack}
            alt="MenuRolloverQuack"
          />
        )}

        <div
          className="absolute bottom-0 left-0 h-[77%] rounded-2xl w-full"
          style={{
            boxShadow: `${
              hovered
                ? "0 0 14px 7px rgba(0, 0, 0, 0.1)"
                : "0 0 6px 3px rgba(0, 0, 0, 0.1)"
            }`,
          }}
        ></div>
        <div
          className={`absolute top-0 w-[85%] ${
            hovered && "-rotate-12"
          } transition-transform duration-300`}
        >
          <img
            className="w-full h-[13rem] relative"
            src={props.image}
            alt="Chocolate Covered Strawberry"
          />
        </div>
        <div className="w-[85%] h-auto flex flex-col mt-auto min-h-20">
          <div className="flex-grow">
            <div className="uppercase font-bold text-xl text-sky-500 flex justify-self-start mb-5">
              {props.cardTitle ? props.cardTitle : "Card Title"}
            </div>
          </div>

          <div className="h-9 flex flex-row justify-between">
            <div className="w-auto h-auto my-1 font-bold">View Menu</div>
            <button
              className={`${
                hovered &&
                "bg-[rgb(73,164,154)] transition ease-in-out duration-500"
              } h-8 w-8 p-2 rounded-full bg-[#BEBEBE] text-white flex items-center justify-center text-2xl`}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </Link>
  );
};

export default MenuItemCards;
