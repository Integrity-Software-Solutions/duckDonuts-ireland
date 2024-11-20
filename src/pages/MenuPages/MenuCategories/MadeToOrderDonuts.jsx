import React, { useState, useEffect } from "react";
import MadeToOrderDonutsImage from "/assets/images/MenuImages/MadeToOrderDonutsImage.jpg";

const MadeToOrderDonuts = () => {
  const [showBackground, setShowBackground] = useState(false);
  const title1 = "Made-to-Order Donuts";
  const title2 = "Made-to-Order Donuts";

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
          src={MadeToOrderDonutsImage}
          className={`h-[10%] w-full max-h-[525px] bg-cover transition-opacity duration-1000 ease-in-out ${
            showBackground ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `${
              showBackground ? `url(${MadeToOrderDonutsImage})` : ""
            }`,
          }}
        />
        <div
          className="uppercase absolute bottom-[2.5rem] left-[10%] lg:bottom-[7rem] lg:left-[22%] text-2xl sm:text-4xl md:text-5xl text-nowrap lg:text-6xl font-bold text-white font-boogaloo"
          style={{ textShadow: "6px 6px 12px rgba(0, 0, 0, 0.7)" }}
        >
          {title1}
        </div>
      </div>
      <div className="flex flex-col justify-self-center h-full w-full max-w-[75rem] py-10 sm:my-16 xl:my-24 mx-20 px-6 xl:px-0">
        <div
          className={` text-sky-500 text-5xl lg:text-7xl font-bold font-boogaloo`}
          style={{ textShadow: "2px 2px 4px rgb(0, 0, 0, 0.5)" }}
        >
          {title2}
        </div>
        <div className="mt-8 mb-7 uppercase text-2xl md:text-3xl font-bold">
          Our secret to delicious donuts
        </div>
        <div className="font-semibold md:text-xl md:font-light">
          It all begins wiht our signatrue vanilla cake donut, freshly made the
          moment you order. The rest is up to you!
        </div>
        <div className="font-bold md:text-lg py-6">
          1. Start with a Coating.
        </div>
        <div className="font-semibold md:text-xl md:font-light">
          Bare, Cinnamon Sugar, Powdered Sugar, Glazed, Chocolate Icing, Vanilla
          Icing, Strawberry Icing, Peanut Butter Icing, Maple Icing, Lemon
          Icing, Blueberry Icing
        </div>
        <div className="font-bold md:text-lg py-6">2. Pick a Topping.</div>
        <div className="font-semibold md:text-xl md:font-light">
          Rainbow Sprinkles, Chocolate Sprinkles, Graham Cracker Crumbs, chopped
          Peanuts, Chopped Bacon, Shredded Coconut, Oreo® Cookie Pieces,
          Streusel
        </div>
        <div className="font-bold md:text-lg py-6">3. Choose a Drizzle.</div>
        <div className="font-semibold md:text-xl md:font-light">
          Hot Fudge, Marshmallow, Salted Caramel, Raspberry, or pick from any
          icing above!
        </div>
      </div>
    </div>
  );
};

export default MadeToOrderDonuts;
