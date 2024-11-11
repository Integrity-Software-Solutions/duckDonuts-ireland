import React from "react";
import IceCreamImage from "/assets/images/MenuImages/IceCream.jpg";
import MenuCategory from "../../components/MenuComponents/MenuCategory";
import menuData from "../../data/menu_data.json";

const IceCream = () => {
  const iceCreamData = menuData.filter((data) => data.category === "Ice Cream");

  return (
    <>
      <MenuCategory
        backgroundImage={IceCreamImage}
        alt="Ice Cream"
        title1="Ice Cream"
        title2="Ice Cream"
        data={iceCreamData}
      />
    </>
  );
};

export default IceCream;
