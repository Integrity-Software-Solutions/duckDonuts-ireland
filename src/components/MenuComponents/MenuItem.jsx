import React, { useState, useEffect } from "react";

const MenuItem = (props) => {
  const [showBackground, setShowBackground] = useState(false);
  const title1 = props.title1;
  const backgroundImage = props.backgroundImage;

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 1000);
  }, []);

  return (
    <div className="h-full w-full">
      <div className=" bg-fuchsia-900 relative">
        <img
          alt="Menu Image"
          src={backgroundImage}
          className={`h-[10%] w-full max-h-[525px] bg-cover transition-opacity duration-1000 ease-in-out ${
            showBackground ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `${
              showBackground ? `url(${backgroundImage})` : ""
            }`,
          }}
        />
        <div
          className="uppercase absolute bottom-[7rem] left-[22%] text-6xl font-bold text-white font-boogaloo"
          style={{ textShadow: "6px 6px 12px rgba(0, 0, 0, 0.7)" }}
        >
          {title1}
        </div>
      </div>
      <div className="flex justify-self-center h-full w-full max-w-[72rem] my-24 mx-20">
        <img
          src={props.itemImage}
          alt={props.title1}
          className="h-full w-full"
        />
        <div className="h-full w-full my-auto ml-8">
          <div className="">
            <div className="text-7xl uppercase font-boogaloo text-sky-500">
              {props.data.name}
            </div>
            <div className="mt-6 text-lg">{props.data.description}</div>
            <div className="mt-6 text-xl font-bold">Ingredients</div>
            <div className="mt-6 text-lg">{props.data.ingredients}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
