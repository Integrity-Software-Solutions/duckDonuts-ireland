import React, { useState, useEffect } from "react";
import MenuImage from "/assets/images/MenuImages/MenuImage.jpg";
import menuData from "../data/menu_data.json";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const [showBackground, setShowBackground] = useState(false);
  const [hovered, setHovered] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 1000);
  }, []);

  const ItemImageAndDescription = ({ key, item }) => {
    return (
      <li className="p-4">
        <div
          className="w-full h-[16rem] hover:cursor-pointer"
          onMouseEnter={() => setHovered(item.name)}
        >
          <img
            src={item.image}
            alt={item.name}
            className={`object-fill w-full h-full  ${
              hovered === item.name ? "scale-105" : "scale-100"
            }`}
            onMouseEnter={() => setHovered(item.name)}
          />
        </div>
        <p
          className={`mt-2 font-bold hover:cursor-pointer ${
            hovered === item.name ? "underline" : "no-underline"
          }`}
          onMouseEnter={() => setHovered(item.name)}
        >
          {item.name}
        </p>
      </li>
    );
  };

  const CategoryRow = (props) => {
    let items = [];
    let featuredItems = [];
    if (props.title === "Seasonal") {
      let data = props.data.seasons[props.season];
      items = data.items ? data.items : [];
      featuredItems = data.featuredItems ? data.featuredItems : [];
    } else {
      items = props.data.items ? props.data.items : [];
      featuredItems = props.data.featuredItems ? props.data.featuredItems : [];
    }
    const allItems = [...featuredItems, ...items];
    const firstFourItems = allItems.slice(0, 4);
    const totalLength = allItems.length;
    const displayViewAllButton = totalLength > 4;

    return (
      <div>
        <div id="divTitle" className="flex justify-between items-center">
          <div
            id="categoryName"
            className="my-[1.222rem] font-bold text-2xl uppercase"
          >
            {props.title ? props.title : "Title 1"}
          </div>
          {displayViewAllButton && (
            <Link to={props.data.endpoint}>
              <button
                id="viewAllButton"
                className="bg-[#E6427A] text-base font-[650] p-3 rounded-full w-40 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400 text-white"
              >
                View All
              </button>
            </Link>
          )}
        </div>
        <div
          id="itemRow"
          onMouseLeave={() => {
            setHovered("");
          }}
        >
          <ul className="grid grid-flow-row grid-cols-4 text-center -mx-4">
            {firstFourItems.map((item, index) => (
              <ItemImageAndDescription key={index} item={item} />
            ))}
          </ul>
        </div>
        <div id="spacingDiv" className="opacity-0">
          <div id="categoryName" className="my-[1.222rem] text-2xl">
            This text is just here to mimic the height of the categoryName div
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      <div className=" bg-fuchsia-900 relative">
        <img
          alt="Menu Image"
          src={MenuImage}
          className={`h-[10%] w-full max-h-[525px] bg-cover transition-opacity duration-1000 ease-in-out ${
            showBackground ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `${showBackground ? `url(${MenuImage})` : ""}`,
          }}
        />
        <div
          className="uppercase absolute bottom-[7rem] left-[22%] text-6xl font-bold text-white font-boogaloo"
          style={{ textShadow: "6px 6px 12px rgba(0, 0, 0, 0.7)" }}
        >
          Menu
        </div>
      </div>
      {/* <div className="py-20 px-[1.15rem]">{props.children}</div> */}
      <div className="flex flex-col justify-self-center h-full w-full max-w-[75rem] my-24 mx-20">
        <div
          className={` text-sky-500 text-8xl font-bold py-3 font-boogaloo`}
          style={{ textShadow: "2px 2px 4px rgb(0, 0, 0, 0.5)" }}
        >
          MENU
        </div>
        {menuData.map((data, index) => {
          return (
            <CategoryRow
              key={index}
              title={data.category}
              data={data}
              season={props.season}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
