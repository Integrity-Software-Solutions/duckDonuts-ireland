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
          className="uppercase absolute bottom-[2.5rem] left-[10%] lg:bottom-[7rem] lg:left-[22%] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-boogaloo w-full2 md:w-1/2 leading-snug"
          style={{ textShadow: "6px 6px 12px rgba(0, 0, 0, 0.7)" }}
        >
          {title1}
        </div>
      </div>
      <div className="flex justify-self-center h-full w-full max-w-[72rem] my-4 xl:my-24 lg:mx-20 px-6 xl:px-0">
        <img
          src={props.itemImage}
          alt={props.title1}
          className="w-1/2 md:w-full md:h-full max-h-[30rem] object-contain my-auto"
        />
        <div className="h-full w-full my-auto ml-3 md:ml-8">
          <div className="">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase font-boogaloo text-sky-500">
              {props.data.name}
            </div>
            <div className="mt-2 md:mt-6 text-base font-semibold md:font-normal md:text-lg">
              {props.data.description}
            </div>
            {typeof props.data.ingredients === "string" && (
              <>
                <div className="mt-2 md:mt-6 text-lg md:text-xl font-bold">
                  Ingredients
                </div>
                <div className="mt-2 md:mt-6 text-base font-semibold md:font-normal md:text-lg">
                  {props.data.ingredients}
                </div>
              </>
            )}
            {typeof props.data.ingredients === "object" && (
              <>
                <div className="mt-2 md:mt-6 text-base font-semibold md:font-normal md:text-lg">
                  {props.data.ingredients.map((item, index) => (
                    <div className="text-sm" key={index}>
                      • {item.name}
                      {item.description !== "" && (
                        <span> - {item.description}</span>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
