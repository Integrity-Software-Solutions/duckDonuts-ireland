import React, { useState, useEffect } from "react";
import backgroundImage from "/assets/images/MenuImages/FoodAllergyInfo.jpg";

const FoodAllergyInfo = () => {
  const [showBackground, setShowBackground] = useState(false);
  const title = "Food Allergy Information";

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
          className="uppercase absolute bottom-[7rem] left-[22%] text-6xl font-bold text-white font-boogaloo w-1/2 leading-snug"
          style={{ textShadow: "6px 6px 12px rgba(0, 0, 0, 0.7)" }}
        >
          {title}
        </div>
      </div>
      <div className="flex flex-col justify-self-center h-full w-full max-w-[72rem] my-24 mx-20">
        <div className="text-7xl uppercase font-boogaloo text-sky-500">
          {title}
        </div>
        <div className="mt-6 text-lg">
          Major food allergens are or may be present in our products, including
          wheat, egg, dairy, soy, peanuts and tree nuts.
        </div>
        <div className="mt-6 text-lg">
          If you have a food allergy or ingredient concern, please alert a team
          member. We are not able to 100% guarantee cross-contact has not
          occurred in-store or in manufacturing facilities.
        </div>
        <div className="mt-10 text-xl font-bold">Nutrition Data</div>
        <div className="mt-6 text-lg flex">
          <a
            href="/documents/Nutrition-Allergy-Info.pdf"
            target="_blank"
            className="text-sky-500 underline hover:no-underline hover:text-[#E6427A] font-bold cursor-pointer mr-1"
          >
            Click this link
          </a>
          to download a pdf of our nutrition and allergy guide.
        </div>
        <div className="mt-6 text-lg">
          For more information, contact your local Duck Donuts!
        </div>
      </div>
    </div>
  );
};

export default FoodAllergyInfo;
